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

.ne9-c3blp {
  d: path("m5.5 8.5l1.75 1.75L9.75 7m5.75 1.5h6M18 15v6m-3-3h6");
}

.pcqm58p_u {
  d: path("M6 3.5h3A3.5 3.5 0 0 1 12.5 7v3A3.5 3.5 0 0 1 9 13.5H6A3.5 3.5 0 0 1 2.5 10V7A3.5 3.5 0 0 1 6 3.5");
}
</style><g class="hntgybcog"><path class="pcqm58p_u"/><path class="ne9-c3blp"/></g>`,
		"fallback": "uix:action-item-add",
	});
}

export default Component;
