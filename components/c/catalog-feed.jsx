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
		"content": `<style>.wuw5j0bmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h1.75A2.625 2.625 0 0 1 9.5 5.125v1.75A2.625 2.625 0 0 1 6.875 9.5h-1.75A2.625 2.625 0 0 1 2.5 6.875v-1.75A2.625 2.625 0 0 1 5.125 2.5m10 0h1.75A2.625 2.625 0 0 1 19.5 5.125v1.75A2.625 2.625 0 0 1 16.875 9.5h-1.75A2.625 2.625 0 0 1 12.5 6.875v-1.75A2.625 2.625 0 0 1 15.125 2.5m-10 10h1.75A2.625 2.625 0 0 1 9.5 15.125v1.75A2.625 2.625 0 0 1 6.875 19.5h-1.75A2.625 2.625 0 0 1 2.5 16.875v-1.75A2.625 2.625 0 0 1 5.125 12.5m9.375 7h.01M14.5 16a3.5 3.5 0 0 1 3.5 3.5m-3.5-7a7 7 0 0 1 7 7");
}
</style><path class="wuw5j0bmb"/>`,
		"fallback": "uix:catalog-feed",
	});
}

export default Component;
