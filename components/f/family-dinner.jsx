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

.ryglc3byv {
  cx: 7.5px;
  cy: 7px;
  r: 2.25px;
}

.w-417_bdv {
  d: path("M4.5 13.5h6a3 3 0 0 1-6 0m9 0h6a3 3 0 0 1-6 0m-10.75 6h18.5");
}

.xlifx1bjg {
  cx: 16.5px;
  cy: 7px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="ryglc3byv"/><circle class="xlifx1bjg"/><path class="w-417_bdv"/></g>`,
		"fallback": "iconoven:family-dinner",
	});
}

export default Component;
