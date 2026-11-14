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
		"content": `<style>.bwq_x8bfz {
  d: path("M9 8.75a3 3 0 0 1 6 0M3.5 10L7 11.5M20.5 10L17 11.5m-14 3h4m14 0h-4m-13.5 5l3.75-2m13.25 2l-3.75-2m-4.75-6v3.25m0 2.75h.01");
}

.enkv8_h6w {
  d: path("M7 14a5 6.5 0 1 0 10 0a5 6.5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="enkv8_h6w"/><path class="bwq_x8bfz"/></g>`,
		"fallback": "uix:bug-report",
	});
}

export default Component;
