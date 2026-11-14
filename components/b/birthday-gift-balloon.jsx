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

.y_62ycbqe {
  d: path("M17 11.75C17 14 16 15.5 17 18");
}

.z2tfkhpej {
  d: path("M4.75 13h6.5A1.75 1.75 0 0 1 13 14.75v4.5A1.75 1.75 0 0 1 11.25 21h-6.5A1.75 1.75 0 0 1 3 19.25v-4.5A1.75 1.75 0 0 1 4.75 13m8.5-5.75a3.75 4.5 0 1 0 7.5 0a3.75 4.5 0 1 0-7.5 0M8 13v8m-5-5h10");
}
</style><g class="hntgybcog"><path class="z2tfkhpej"/><path class="y_62ycbqe"/></g>`,
		"fallback": "uix:birthday-gift-balloon",
	});
}

export default Component;
