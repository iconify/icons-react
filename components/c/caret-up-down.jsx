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
		"content": `<style>.mjp9yrwup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.115 5.739L14.25 7a1.498 1.498 0 0 1-1.113 2.5h-2.274A1.498 1.498 0 0 1 9.75 7l1.135-1.261a1.5 1.5 0 0 1 2.23 0m0 12.522L14.25 17a1.498 1.498 0 0 0-1.113-2.5h-2.274A1.498 1.498 0 0 0 9.75 17l1.135 1.261a1.5 1.5 0 0 0 2.23 0");
}
</style><path class="mjp9yrwup"/>`,
		"fallback": "uix:caret-up-down",
	});
}

export default Component;
