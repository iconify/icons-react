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
		"content": `<style>.nxa16qfej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5L9 17v3.5h4a1.5 1.5 0 0 0 0-3L9 17m6.5-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M18 16v4.5");
}
</style><path class="nxa16qfej"/>`,
		"fallback": "uix:driving-range",
	});
}

export default Component;
