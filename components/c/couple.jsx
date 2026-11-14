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
		"content": `<style>.e01gzedos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 21.5v-6a3.5 3.5 0 0 1 7 0v6m4 0v-6a3.5 3.5 0 0 1 7 0v6m-11-4h4");
}
</style><path class="e01gzedos"/>`,
		"fallback": "uix:couple",
	});
}

export default Component;
