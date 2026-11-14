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

.pan3f_chh {
  d: path("M5.5 11.5c-3-5.5-.5-9 4-9S15.5 6 13 10");
}

.yacej0bvt {
  d: path("M9 10h11.5v5H14a5 5 0 1 1-5-5");
}
</style><g class="hntgybcog"><path class="yacej0bvt"/><path class="pan3f_chh"/></g>`,
		"fallback": "uix:bootcamp",
	});
}

export default Component;
