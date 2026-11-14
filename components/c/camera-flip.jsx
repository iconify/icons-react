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

.puar5c7ub {
  d: path("M3 8.5a2 2 0 0 1 2-2h2.5L9 4h6l1.5 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM8 13h8");
}

.yzyf3yb8j {
  d: path("m10 11l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="puar5c7ub"/><path class="yzyf3yb8j"/></g>`,
		"fallback": "uix:camera-flip",
	});
}

export default Component;
