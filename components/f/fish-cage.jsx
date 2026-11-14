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
		"content": `<style>.aiqsv8bpz {
  d: path("M3.5 11.5q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0M12 8v12m-5-4h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3ba29oig {
  d: path("M4.25 4.5h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 8H4.25A1.75 1.75 0 0 1 2.5 6.25A1.75 1.75 0 0 1 4.25 4.5M5 8l3 12h8l3-12");
}
</style><g class="hntgybcog"><path class="r3ba29oig"/><path class="aiqsv8bpz"/></g>`,
		"fallback": "uix:fish-cage",
	});
}

export default Component;
