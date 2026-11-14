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

.m-wyhkb0q {
  d: path("M7.25 15h4.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 11.75 21h-4.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 7.25 15m4-5.5h2.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 13.75 15h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75");
}

.p45lujqbc {
  d: path("M3 21v-9.5a9 9 0 0 1 18 0V21Z");
}
</style><g class="hntgybcog"><path class="p45lujqbc"/><path class="m-wyhkb0q"/></g>`,
		"fallback": "uix:cargo-hold",
	});
}

export default Component;
