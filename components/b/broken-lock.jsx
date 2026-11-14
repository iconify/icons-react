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
		"content": `<style>.dho194b6t {
  d: path("M8 10.5h8a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18v-4A3.5 3.5 0 0 1 8 10.5m.5-2.75V6a3.5 3.5 0 0 1 7 0v1.75");
}

.fqr0r3bdv {
  d: path("m4.5 15.5l4.5 2l3-3l3 2.5l4.5-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dho194b6t"/><path class="fqr0r3bdv"/></g>`,
		"fallback": "uix:broken-lock",
	});
}

export default Component;
