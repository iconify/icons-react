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

.yea6u7e1n {
  d: path("M17 5L11 12L12.5 13.75M17 19L15 16.6667");
}

.yxe1q2bbc {
  d: path("M13 19L7 12L8.5 10.25M13 5L11 7.33333");
}
</style><g class="hntgybcog"><path class="yxe1q2bbc"/><path class="yea6u7e1n"/></g>`,
		"fallback": "solar:double-alt-arrow-left-broken",
	});
}

export default Component;
