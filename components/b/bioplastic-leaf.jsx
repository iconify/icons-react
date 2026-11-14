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

.jzm3ibbqu {
  d: path("M8 18c0-5 3-8 8-8c0 5-3 8-8 8m0 0l4.5-4.5");
}

.u6pwgu-ds {
  d: path("M7.5 3h9A3.5 3.5 0 0 1 20 6.5V18a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6.5A3.5 3.5 0 0 1 7.5 3M4 7h16");
}
</style><g class="hntgybcog"><path class="u6pwgu-ds"/><path class="jzm3ibbqu"/></g>`,
		"fallback": "uix:bioplastic-leaf",
	});
}

export default Component;
