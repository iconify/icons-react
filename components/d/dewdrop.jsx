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
		"content": `<style>.a-b_3nb4z {
  d: path("m12 8.75l2.25 3a2.5 2.5 0 1 1-4.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qa4hnfilf {
  d: path("M4 20C3 9 9 3 20 4c1 11-5 17-16 16m-1.5 1.5L4 20");
}
</style><g class="hntgybcog"><path class="qa4hnfilf"/><path class="a-b_3nb4z"/></g>`,
		"fallback": "uix:dewdrop",
	});
}

export default Component;
