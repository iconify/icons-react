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

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}

.x1bjgbcpp {
  d: path("M7.25 7.5h.5A1.75 1.75 0 0 1 9.5 9.25v.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 5.5 9.75v-.5A1.75 1.75 0 0 1 7.25 7.5m5.25 2h6m-13 6h13");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="x1bjgbcpp"/></g>`,
		"fallback": "uix:arrival-card",
	});
}

export default Component;
