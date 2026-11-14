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
		"content": `<style>.cxsvbebba {
  d: path("M10 6V3.5h4V6M4 6h16M5.5 6l1.25 13.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5L18.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lz7dzbcsb {
  d: path("M10.75 12.5h2.5A1.75 1.75 0 0 1 15 14.25v1A1.75 1.75 0 0 1 13.25 17h-2.5A1.75 1.75 0 0 1 9 15.25v-1a1.75 1.75 0 0 1 1.75-1.75m-.25 0V11a1.5 1.5 0 0 1 3 0v1.5");
}
</style><g class="hntgybcog"><path class="cxsvbebba"/><path class="lz7dzbcsb"/></g>`,
		"fallback": "uix:bear-proof-bin",
	});
}

export default Component;
