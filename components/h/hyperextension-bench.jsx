import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xov08-xxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 11.5l9-3a1.58 1.58 0 0 1 2 1a1.58 1.58 0 0 1-1 2l-9 3a1.58 1.58 0 0 1-2-1a1.58 1.58 0 0 1 1-2M10 13v7.5m-6 0h13m.5-14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="xov08-xxn"/>`,
		"fallback": "uix:hyperextension-bench",
	});
}

export default Component;
