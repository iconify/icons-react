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

.lftj-ccbr {
  d: path("M6.5 17q1.75-1.5 3.5 0t3.5 0t4 0");
}

.nirw84bcm {
  d: path("M6.5 7h11a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 16.5v-6A3.5 3.5 0 0 1 6.5 7M9 7V4.5h6V7m-3 2.5V14m-2.25-2.25h4.5");
}
</style><g class="hntgybcog"><path class="nirw84bcm"/><path class="lftj-ccbr"/></g>`,
		"fallback": "uix:first-aid-kit-marine",
	});
}

export default Component;
