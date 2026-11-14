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

.thvpy0rzw {
  d: path("M10.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.tqlmxdbdc {
  d: path("M2.5 3h19c0 4.5-4 6.5-9.5 6.5S2.5 7.5 2.5 3M12 9.5v3m-5 0h10a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-2A3.5 3.5 0 0 1 7 12.5");
}
</style><g class="hntgybcog"><path class="tqlmxdbdc"/><path class="thvpy0rzw"/></g>`,
		"fallback": "uix:child-scale",
	});
}

export default Component;
