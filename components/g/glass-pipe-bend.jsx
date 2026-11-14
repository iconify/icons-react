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
		"content": `<style>.b3_fxlb3q {
  d: path("M10 2.5L8.5 4v10a3.5 3.5 0 0 0 7 0V4L14 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdtenrd_u {
  d: path("M3.5 2.5L5 4v10a7 7 0 0 0 14 0V4l1.5-1.5");
}
</style><g class="hntgybcog"><path class="xdtenrd_u"/><path class="b3_fxlb3q"/></g>`,
		"fallback": "uix:glass-pipe-bend",
	});
}

export default Component;
