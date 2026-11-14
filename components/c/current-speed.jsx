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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2ceadkdv {
  d: path("M10.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.5-1l3.5-3.5");
}

.m668x1b0w {
  d: path("M3.75 18.75a9.5 9.5 0 1 1 16.5 0");
}
</style><g class="hntgybcog"><path class="m668x1b0w"/><path class="k2ceadkdv"/></g>`,
		"fallback": "uix:current-speed",
	});
}

export default Component;
