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
		"content": `<style>.gy5m94b2l {
  d: path("M3 9h8l4 4v8M11 9l6-6m-2 10l6-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qd76eacjc {
  d: path("M3 21V9l6-6h8l4 4v8l-6 6Z");
}
</style><g class="hntgybcog"><path class="qd76eacjc"/><path class="gy5m94b2l"/></g>`,
		"fallback": "uix:bevel-edge",
	});
}

export default Component;
