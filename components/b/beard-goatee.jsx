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

.mddf2e97q {
  d: path("M4.5 3v6.5c0 3 2 5.5 4.5 6.5l3 5l3-5c2.5-1 4.5-3.5 4.5-6.5V3M9 16h6");
}

.ub4bqmegw {
  d: path("M9.5 11.5q2.5 1.5 5 0");
}
</style><g class="hntgybcog"><path class="mddf2e97q"/><path class="ub4bqmegw"/></g>`,
		"fallback": "uix:beard-goatee",
	});
}

export default Component;
