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

.wuw2o3bxv {
  d: path("M6 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m5 .5h.01m4.49-2h.01m-1.01 5h.01");
}

.yjgu0dbed {
  d: path("M6.322 15.737a7 7 0 1 1 9.415-9.415");
}
</style><g class="hntgybcog"><path class="yjgu0dbed"/><path class="wuw2o3bxv"/></g>`,
		"fallback": "uix:biscuit-round",
	});
}

export default Component;
