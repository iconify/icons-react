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
		"content": `<style>.c_y_xq2lv {
  d: path("M2.5 21.5V12a9.5 9.5 0 0 1 19 0v9.5M8 3.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wec6fm33k {
  d: path("M5.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 3.5V9m-2.25 0h4.5");
}
</style><g class="hntgybcog"><path class="c_y_xq2lv"/><path class="wec6fm33k"/></g>`,
		"fallback": "uix:baby-gym-arch",
	});
}

export default Component;
