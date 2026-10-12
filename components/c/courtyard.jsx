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
		"content": `<style>.dcgw77bis {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mf2oj365x {
  d: path("M9.65 21.25h-6.3q-.6 0-.6-.6V3.35q0-.6.6-.6h17.3q.6 0 .6.6v17.3q0 .6-.6.6h-6.3q-.6 0-.6-.6V18.1q0-.6.6-.6h2.55q.6 0 .6-.6V7.1q0-.6-.6-.6H7.1q-.6 0-.6.6v9.8q0 .6.6.6h2.55q.6 0 .6.6v2.55q0 .6-.6.6");
}
</style><g class="hntgybcog"><path class="mf2oj365x"/><circle class="dcgw77bis"/></g>`,
		"fallback": "iconoven:courtyard",
	});
}

export default Component;
