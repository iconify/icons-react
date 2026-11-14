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

.qgpzslgmq {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-9.5 9a1.9 1.9 0 0 1 0-3.75a2.6 2.6 0 0 1 5 .5a1.65 1.65 0 0 1-.5 3.25Z");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="qgpzslgmq"/></g>`,
		"fallback": "uix:file-cloud",
	});
}

export default Component;
