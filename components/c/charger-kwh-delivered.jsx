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
		"content": `<style>.eqmz3qbnr {
  d: path("m10.25 6.5l-3 6h3.5l-3 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tz1633bnf {
  d: path("M7.5 3h3A3.5 3.5 0 0 1 14 6.5V18a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 4 18V6.5A3.5 3.5 0 0 1 7.5 3M14 7h3a2 2 0 0 1 2 2v7m0 0za1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-.5A1.5 1.5 0 0 1 19 16");
}
</style><g class="hntgybcog"><path class="tz1633bnf"/><path class="eqmz3qbnr"/></g>`,
		"fallback": "uix:charger-kwh-delivered",
	});
}

export default Component;
