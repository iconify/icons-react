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

.ld4r858hn {
  d: path("m7.5 17.5l2.25-2l2.25 2l2.25-2l2.25 2");
}

.mcdmdujpa {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m4.25-4.25l3.5 1.5m7-1.5l-3.5 1.5M9 12h.01M15 12h.01");
}
</style><g class="hntgybcog"><path class="mcdmdujpa"/><path class="ld4r858hn"/></g>`,
		"fallback": "uix:face-cursing",
	});
}

export default Component;
