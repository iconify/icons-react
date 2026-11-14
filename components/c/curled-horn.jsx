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

.qmxtsi3cb {
  d: path("M3 19C2.5 8 8 3 13.5 3c5 0 8 4 8 8.5c0 5-4.5 7.5-8 7.5c-2.5 0-4-2.5-4-5s1.5-4 3.75-4c1.75 0 3 1.25 2.5 2.75");
}

.yq8m0nbov {
  d: path("M6.25 19C5.75 11 9 5.75 13.5 5.75c3.5 0 5 2.75 5 5.75M3 19h3.25");
}
</style><g class="hntgybcog"><path class="qmxtsi3cb"/><path class="yq8m0nbov"/></g>`,
		"fallback": "uix:curled-horn",
	});
}

export default Component;
