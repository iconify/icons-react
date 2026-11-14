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
		"content": `<style>.dr7qce89v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 21.5l4-8l5-1.5m9 9.5l-4-8l-5-1.5m-2.5 9c0-3 2-5 5-5c0 3-2 5-5 5");
}
</style><path class="dr7qce89v"/>`,
		"fallback": "uix:football-tackle",
	});
}

export default Component;
