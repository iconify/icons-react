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
		"content": `<style>.ct4xv0bfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h16m-8 0V6.5m-.625 0h1.25A4.375 4.375 0 0 1 17 10.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-1.25A4.375 4.375 0 0 1 7 17.125v-6.25A4.375 4.375 0 0 1 11.375 6.5");
}
</style><path class="ct4xv0bfp"/>`,
		"fallback": "uix:heavy-bag",
	});
}

export default Component;
