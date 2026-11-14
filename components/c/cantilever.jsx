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
		"content": `<style>.who8-0bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5h1A1.75 1.75 0 0 1 7.5 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 3 19.75V4.25A1.75 1.75 0 0 1 4.75 2.5M7.5 8H21v3.5l-13.5 3");
}
</style><path class="who8-0bkb"/>`,
		"fallback": "uix:cantilever",
	});
}

export default Component;
