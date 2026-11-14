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

.nh0r1xb3w {
  d: path("M9.5 21v-8h5v8m-5-8L6 14.5V21m8.5-8l3.5 1.5V21");
}

.wei_cjtfb {
  d: path("M3 21V10.5L6 6l6-3l6 3l3 4.5V21Z");
}
</style><g class="hntgybcog"><path class="wei_cjtfb"/><path class="nh0r1xb3w"/></g>`,
		"fallback": "uix:barn-open",
	});
}

export default Component;
