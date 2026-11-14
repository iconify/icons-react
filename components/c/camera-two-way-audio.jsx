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
		"content": `<style>.e6uxf_b-v {
  d: path("M9 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.405-3.696a5.75 5.75 0 0 1 0 7.392m-8.81 0a5.75 5.75 0 0 1 0-7.392");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.npk3-51bl {
  d: path("M3 8.5a2 2 0 0 1 2-2h2.5L9 4h6l1.5 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="npk3-51bl"/><path class="e6uxf_b-v"/></g>`,
		"fallback": "uix:camera-two-way-audio",
	});
}

export default Component;
