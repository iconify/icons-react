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
		"content": `<style>.e5jfzabtj {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj83qybev {
  d: path("M4.5 13h15c0 5-3.5 8-7.5 8s-7.5-3-7.5-8m0 0L12 6l7.5 7M12 2.5V6");
}
</style><g class="hntgybcog"><path class="wj83qybev"/><path class="e5jfzabtj"/></g>`,
		"fallback": "uix:hanging-basket",
	});
}

export default Component;
