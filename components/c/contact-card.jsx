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

.xptf3gbcg {
  d: path("M6.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 5.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5m3-6h4m-4 4h3");
}

.yssyf8lqd {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5");
}
</style><g class="hntgybcog"><path class="yssyf8lqd"/><path class="xptf3gbcg"/></g>`,
		"fallback": "uix:contact-card",
	});
}

export default Component;
