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
		"content": `<style>.b5kf35hxf {
  d: path("M9.5 15.5c1.25 1.25 3.75 1.25 5 0M12 2.5c-1.5 1.5-1.25 3.5.5 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5d5f4x-x {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 12h.01M15 12h.01");
}
</style><g class="hntgybcog"><path class="m5d5f4x-x"/><path class="b5kf35hxf"/></g>`,
		"fallback": "uix:baby",
	});
}

export default Component;
