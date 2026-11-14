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
		"content": `<style>.avipjbcle {
  d: path("M6.5 8.5c0-3.75 2.5-6 5.5-6c3.25 0 5.5 2.5 5.5 6c0 3-2 4.5-3.5 6c-1 1-1 2.5-1 3.5c0 2-1.5 3.5-3.5 3.5c-1.5 0-2.5-1-3-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rnju_bbji {
  d: path("M9.5 9c0-2 1-3 2.5-3s2.5 1 2.5 2.5S13 11 12 12m-2.25 6h.01");
}
</style><g class="hntgybcog"><path class="avipjbcle"/><path class="rnju_bbji"/></g>`,
		"fallback": "uix:ear-piercing",
	});
}

export default Component;
