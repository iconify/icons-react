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
		"content": `<style>.en1nbdc_p {
  d: path("m3 10l4.5-3.5L12 10l4.5-3.5L21 10M3 16l4.5-3.5L12 16l4.5-3.5L21 16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.krauzq_cj {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3");
}
</style><g class="hntgybcog"><path class="krauzq_cj"/><path class="en1nbdc_p"/></g>`,
		"fallback": "uix:chevron-floor",
	});
}

export default Component;
