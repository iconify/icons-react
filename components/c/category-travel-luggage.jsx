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
		"content": `<style>.zpzq5-b-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 7h5.25A4.375 4.375 0 0 1 19 11.375v5.25A4.375 4.375 0 0 1 14.625 21h-5.25A4.375 4.375 0 0 1 5 16.625v-5.25A4.375 4.375 0 0 1 9.375 7M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7m-5.5 4v6m5-6v6");
}
</style><path class="zpzq5-b-u"/>`,
		"fallback": "uix:category-travel-luggage",
	});
}

export default Component;
