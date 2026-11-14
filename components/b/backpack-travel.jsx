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

.jxyddgrou {
  d: path("M8 21.5V16a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 16v5.5");
}

.rogey3bnw {
  d: path("M5 21.5V10a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v11.5ZM10 5V3.5h4V5m-9 6h14");
}
</style><g class="hntgybcog"><path class="rogey3bnw"/><path class="jxyddgrou"/></g>`,
		"fallback": "uix:backpack-travel",
	});
}

export default Component;
