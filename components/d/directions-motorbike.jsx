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
		"content": `<style>.b-9on8bmo {
  d: path("M2 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voc1u5q4k {
  d: path("m5 15l3-5h6.5l-2 5Zm14 0l-3-8.5h-2.5");
}
</style><g class="hntgybcog"><path class="b-9on8bmo"/><path class="voc1u5q4k"/></g>`,
		"fallback": "uix:directions-motorbike",
	});
}

export default Component;
