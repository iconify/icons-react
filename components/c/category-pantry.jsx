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

.vbssg_bzl {
  d: path("M6.25 2.5h9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4.75 4a1.5 1.5 0 0 1 1.5-1.5m-.5 3V19q0 2.5 2.5 2.5h5q2.5 0 2.5-2.5V5.5");
}

.wq7gtcbjx {
  d: path("M16.75 4h2.5v5h-3.5m-8 3h6m-5.5 3.5h.01m4.99 0h.01M10.75 19h.01");
}
</style><g class="hntgybcog"><path class="vbssg_bzl"/><path class="wq7gtcbjx"/></g>`,
		"fallback": "uix:category-pantry",
	});
}

export default Component;
