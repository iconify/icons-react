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

.k4is7ibnc {
  d: path("m2.5 7l.75-2.5h7.5L11.5 7Zm.75 0L4 16.5M10.75 7L10 16.5m4.5 0v-8h4l3 3.5v4.5h-19");
}

.kwmzvp45r {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="k4is7ibnc"/><path class="kwmzvp45r"/></g>`,
		"fallback": "uix:bin-delivery",
	});
}

export default Component;
