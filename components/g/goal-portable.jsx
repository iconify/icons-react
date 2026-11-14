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

.kizy6lbux {
  d: path("M2.75 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m15 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9.5 3.75v13m5-13v13");
}

.vryr-xb_r {
  d: path("M4.5 16.75v-13h15v13");
}
</style><g class="hntgybcog"><path class="vryr-xb_r"/><path class="kizy6lbux"/></g>`,
		"fallback": "uix:goal-portable",
	});
}

export default Component;
