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
		"content": `<style>.f2ycr6bap {
  d: path("m13.25 11.75l4 4l4-4");
}

.h3l_02n5t {
  d: path("M3.75 18.75C3.75 11 7.5 6.5 11.25 6.5s6 4 6 9.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h3l_02n5t"/><path class="f2ycr6bap"/></g>`,
		"fallback": "iconoven:arrow-curve-right",
	});
}

export default Component;
