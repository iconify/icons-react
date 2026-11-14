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
		"content": `<style>.ghebrcc5x {
  d: path("M2.5 21.5h19M3 18.5l4.5-6l4 3l4.5-6l5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrku1zb_x {
  fill: currentColor;
  d: path("M4 2.5h9A1.5 1.5 0 0 1 14.5 4v.5A1.5 1.5 0 0 1 13 6H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5");
}
</style><g class="hntgybcog"><path class="wrku1zb_x"/><path class="ghebrcc5x"/></g>`,
		"fallback": "uix:chart-title",
	});
}

export default Component;
