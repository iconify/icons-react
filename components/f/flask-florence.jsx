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

.p4mexcbhg {
  d: path("M5.25 16Q8.5 14 12 16t6.75 0");
}

.xzlgw2-6z {
  d: path("M10 3v4.75a7 7 0 1 0 4 0V3M8.75 3h6.5");
}
</style><g class="hntgybcog"><path class="xzlgw2-6z"/><path class="p4mexcbhg"/></g>`,
		"fallback": "uix:flask-florence",
	});
}

export default Component;
