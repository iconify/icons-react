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
		"content": `<style>.uqba41bun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M2.5 21.5c0-3.25 1.75-5 4-5s4 1.75 4 5M14.75 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M13.5 21.5c0-3.25 1.75-5 4-5s4 1.75 4 5m-10.419-19h1.838a1.5 1.5 0 0 1 1.423 1.974l-.5 1.5A1.5 1.5 0 0 1 12.419 7h-.838a1.5 1.5 0 0 1-1.423-1.026l-.5-1.5A1.5 1.5 0 0 1 11.081 2.5M10.5 7a1.5 1.5 0 0 0 3 0");
}
</style><path class="uqba41bun"/>`,
		"fallback": "uix:badminton-doubles",
	});
}

export default Component;
