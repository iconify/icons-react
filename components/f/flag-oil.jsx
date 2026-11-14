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
		"content": `<style>.e8ttyxcnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m0-18C7 2 9 2 12 3.5s5 1.5 8 0V10c-3 1.5-5 1.5-8 0s-5-1.5-8 0m14 4c1.5 1.75 3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 1.5-3.25 3-5");
}
</style><path class="e8ttyxcnm"/>`,
		"fallback": "uix:flag-oil",
	});
}

export default Component;
