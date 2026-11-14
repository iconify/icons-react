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
		"content": `<style>.hxjmf1bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.25 5.75l3.873-2.242a1.75 1.75 0 0 1 1.754 0L16.75 5.75a1.474 1.474 0 0 1-.739 2.75H7.989a1.474 1.474 0 0 1-.739-2.75M4 8.5V21M20 8.5V21m-8-8q-2.5-1.5-4.75-1v7q2.25-.5 4.75 1q2.5-1.5 4.75-1v-7q-2.25-.5-4.75 1m0 0v7");
}
</style><path class="hxjmf1bkb"/>`,
		"fallback": "uix:gurbani-book-canopy",
	});
}

export default Component;
