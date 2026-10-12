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

.r2akiquzi {
  cx: 9px;
  cy: 12px;
  r: 3px;
}

.u3k-n2bbq {
  d: path("m4.48 7.29l11.04-1.58q1.48-.21 2.71.66l1.79 1.26q1.23.87 1.23 2.37v5.25q0 1.5-1.5 1.58l-15.25.84Q3 17.75 3 16.25V9q0-1.5 1.48-1.71M14.5 7v9");
}
</style><g class="hntgybcog"><path class="u3k-n2bbq"/><circle class="r2akiquzi"/></g>`,
		"fallback": "iconoven:headlight-car",
	});
}

export default Component;
