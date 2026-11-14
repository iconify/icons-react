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
		"content": `<style>.qny10kb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7h5a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 5 18v-7.5A3.5 3.5 0 0 1 8.5 7M9 3h4a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 13 7H9a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 9 3m8 6.5h1.5a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H17m-9.25-2.5h6.5");
}
</style><path class="qny10kb9a"/>`,
		"fallback": "uix:fixer-bottle",
	});
}

export default Component;
