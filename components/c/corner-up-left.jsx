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
		"content": `<style>.gb5ngdcjv {
  d: path("M8.5 13L4.75 9.25L8.5 5.5");
}

.h6fsx0sfb {
  d: path("M19.75 19.75v-8a2.5 2.5 0 0 0-2.5-2.5H4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h6fsx0sfb"/><path class="gb5ngdcjv"/></g>`,
		"fallback": "iconoven:corner-up-left",
	});
}

export default Component;
