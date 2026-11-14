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

.trbpac85q {
  d: path("M9 18q3-2.5 6 0");
}

.zafg-cchn {
  d: path("M6.5 9c0-3.75 2.25-6 5.5-6h.5l1.25 3l1.5-1.25L16 7.5l1.5 1V16a5.5 5.5 0 0 1-11 0Z");
}
</style><g class="hntgybcog"><path class="zafg-cchn"/><path class="trbpac85q"/></g>`,
		"fallback": "uix:broken-nail",
	});
}

export default Component;
