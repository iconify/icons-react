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

.yygw72b4s {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M9.5 12l-2.25 2.25L9.5 16.5m3.5-5L11 17m3.5-5l2.25 2.25l-2.25 2.25");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="yygw72b4s"/></g>`,
		"fallback": "uix:file-html",
	});
}

export default Component;
