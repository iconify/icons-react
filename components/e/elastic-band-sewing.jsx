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
		"content": `<style>.at91ojb2v {
  d: path("M5.125 7h13.75A2.625 2.625 0 0 1 21.5 9.625v4.75A2.625 2.625 0 0 1 18.875 17H5.125A2.625 2.625 0 0 1 2.5 14.375v-4.75A2.625 2.625 0 0 1 5.125 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8olcgb-p {
  d: path("m5.75 14l2.5-4l2.5 4l2.5-4l2.5 4l2.5-4");
}
</style><g class="hntgybcog"><path class="at91ojb2v"/><path class="j8olcgb-p"/></g>`,
		"fallback": "uix:elastic-band-sewing",
	});
}

export default Component;
