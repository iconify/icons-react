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
		"content": `<style>.eo2fcvp4g {
  d: path("M3 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0M16 16l5 5M7 10.5h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pvpfk_bdv {
  d: path("m11 8l2.5 2.5L11 13");
}
</style><g class="hntgybcog"><path class="eo2fcvp4g"/><path class="pvpfk_bdv"/></g>`,
		"fallback": "uix:find-replace",
	});
}

export default Component;
