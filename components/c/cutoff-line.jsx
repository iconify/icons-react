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
		"content": `<style>.whqghwbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4-7.5L14 15m-6.75 0L14 9m2.5 3H18m2.75 0h1");
}
</style><path class="whqghwbjd"/>`,
		"fallback": "uix:cutoff-line",
	});
}

export default Component;
