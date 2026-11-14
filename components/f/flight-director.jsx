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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.wikewzb_s {
  d: path("M5.5 14h4l2.5 2l2.5-2h4m-12-4.5L12 12l5.5-2.5m-5.5-7V5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="wikewzb_s"/></g>`,
		"fallback": "uix:flight-director",
	});
}

export default Component;
