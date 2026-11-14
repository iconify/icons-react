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
		"content": `<style>.p6uopwbku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.745 3.351l4.39 2.066a1.75 1.75 0 0 1 0 3.166l-4.39 2.066a1.75 1.75 0 0 1-1.49 0l-4.39-2.066a1.75 1.75 0 0 1 0-3.166l4.39-2.066a1.75 1.75 0 0 1 1.49 0M3.5 11.5l8.5 4l8.5-4m-17 4.25v1.5l8.5 4l8.5-4v-1.5");
}
</style><path class="p6uopwbku"/>`,
		"fallback": "uix:full-stack",
	});
}

export default Component;
