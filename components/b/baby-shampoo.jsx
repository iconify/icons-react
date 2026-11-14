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
		"content": `<style>.xa2sftbac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9.5h2A3.5 3.5 0 0 1 14 13v5a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 5 18v-5a3.5 3.5 0 0 1 3.5-3.5m.25-4h1.5A1.75 1.75 0 0 1 12 7.25v.5a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 7 7.75v-.5A1.75 1.75 0 0 1 8.75 5.5m6-.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="xa2sftbac"/>`,
		"fallback": "uix:baby-shampoo",
	});
}

export default Component;
