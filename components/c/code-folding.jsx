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

.jtkg58beq {
  d: path("M9 6.5L12 9l3-2.5m-6 11l3-2.5l3 2.5");
}

.qb3iv34zs {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5M4.5 12h15");
}
</style><g class="hntgybcog"><path class="qb3iv34zs"/><path class="jtkg58beq"/></g>`,
		"fallback": "uix:code-folding",
	});
}

export default Component;
