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
		"content": `<style>.a6ox1ojiz {
  d: path("m9.5 9.5l1.75 1.75l3.25-3.5M8.5 15l-1.25 6.25L12 19l4.75 2.25L15.5 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl4903ezj {
  cx: 12px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="jl4903ezj"/><path class="a6ox1ojiz"/></g>`,
		"fallback": "iconoven:badge-check",
	});
}

export default Component;
