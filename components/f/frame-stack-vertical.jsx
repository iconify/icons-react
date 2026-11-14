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
		"content": `<style>.sx0-ezbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 3h3.25A2.625 2.625 0 0 1 12 5.625v2.25A2.625 2.625 0 0 1 9.375 10.5h-3.25A2.625 2.625 0 0 1 3.5 7.875v-2.25A2.625 2.625 0 0 1 6.125 3m0 10.5h3.25A2.625 2.625 0 0 1 12 16.125v2.25A2.625 2.625 0 0 1 9.375 21h-3.25A2.625 2.625 0 0 1 3.5 18.375v-2.25A2.625 2.625 0 0 1 6.125 13.5M18.5 3.5v17M15.75 18l2.75 2.75L21.25 18");
}
</style><path class="sx0-ezbgm"/>`,
		"fallback": "uix:frame-stack-vertical",
	});
}

export default Component;
