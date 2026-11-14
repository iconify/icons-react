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
		"content": `<style>.oksg-_beu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17.5a4.5 2.5 0 1 0 9 0a4.5 2.5 0 1 0-9 0m7-6.5a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0M7 5.5a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0");
}
</style><path class="oksg-_beu"/>`,
		"fallback": "uix:garden-path",
	});
}

export default Component;
