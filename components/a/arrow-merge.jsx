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
		"content": `<style>.enfkylbcb {
  d: path("M8.5 7.5L12 4l3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mucl2eclq {
  d: path("M5.25 20.25L12 13.5m6.75 6.75L12 13.5v-9");
}
</style><g class="hntgybcog"><path class="mucl2eclq"/><path class="enfkylbcb"/></g>`,
		"fallback": "iconoven:arrow-merge",
	});
}

export default Component;
