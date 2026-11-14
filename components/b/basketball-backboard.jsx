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

.jjf43xb4n {
  d: path("M5.625 2.5h12.75A2.625 2.625 0 0 1 21 5.125v4.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 9.875v-4.75A2.625 2.625 0 0 1 5.625 2.5M7 12.5L9 21h6l2-8.5");
}

.xl42i_7-p {
  d: path("M10.5 5.5h3A1.5 1.5 0 0 1 15 7v1a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 8V7a1.5 1.5 0 0 1 1.5-1.5M9 21l3-5.5l3 5.5");
}
</style><g class="hntgybcog"><path class="jjf43xb4n"/><path class="xl42i_7-p"/></g>`,
		"fallback": "uix:basketball-backboard",
	});
}

export default Component;
