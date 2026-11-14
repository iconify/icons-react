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

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.yv1joq1vx {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 17c1.5-4 2.5-4 3-1c.5 2.5 2-1 3-.5c.75.4 1 1.5 2 1");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="yv1joq1vx"/></g>`,
		"fallback": "uix:file-signature",
	});
}

export default Component;
