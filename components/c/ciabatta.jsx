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
		"content": `<style>.ihe-inb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17h15c2 0 2.5-1.5 2-3.5C20.5 9.5 17 7 12 7s-8.5 2.5-9.5 6.5c-.5 2 0 3.5 2 3.5m4-2.5l1.5-3.25m3.5 3.25l1.5-3.25");
}
</style><path class="ihe-inb4t"/>`,
		"fallback": "uix:ciabatta",
	});
}

export default Component;
