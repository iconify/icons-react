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

.pyynccbji {
  d: path("M10.106 3h3.788a2.625 2.625 0 0 1 2.563 2.056l2.833 12.75A2.625 2.625 0 0 1 16.728 21H7.272a2.625 2.625 0 0 1-2.562-3.194l2.833-12.75A2.625 2.625 0 0 1 10.106 3M12 17l2-10.75");
}

.qn_to6vho {
  d: path("M13 9h.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H13a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 13 9");
}
</style><g class="hntgybcog"><path class="pyynccbji"/><path class="qn_to6vho"/></g>`,
		"fallback": "uix:cadence",
	});
}

export default Component;
