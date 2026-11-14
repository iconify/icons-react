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

.kwnka5nhd {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.l23iq713z {
  d: path("M4.206 19a9 9 0 1 1 15.588 0M4.25 10l2.25 1.25M12 5.5V8m7.75 2l-2.25 1.25M12 14.5l3-5.25");
}
</style><g class="hntgybcog"><path class="l23iq713z"/><path class="kwnka5nhd"/></g>`,
		"fallback": "uix:employee-kpi",
	});
}

export default Component;
