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

.ksiibsbdf {
  width: 16.5px;
  height: 15px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}

.wkawsbbrw {
  d: path("M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5m-8.25 8h8.5m-6.5-2l-2 2l2 2m4.5-4l2 2l-2 2");
}
</style><g class="hntgybcog"><rect class="ksiibsbdf"/><path class="wkawsbbrw"/></g>`,
		"fallback": "iconoven:calendar-range",
	});
}

export default Component;
