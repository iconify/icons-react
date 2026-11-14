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

.mjd6fjb4a {
  d: path("M5.125 9h13.75a2.625 2.625 0 0 1 2.625 2.625v5.75A2.625 2.625 0 0 1 18.875 20H5.125A2.625 2.625 0 0 1 2.5 17.375v-5.75A2.625 2.625 0 0 1 5.125 9M4 9V7h16v2M5.5 7V5h13v2M8 5v15m3-15v15");
}

.ur6ev_mnn {
  d: path("M14.75 14.5a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="mjd6fjb4a"/><path class="ur6ev_mnn"/></g>`,
		"fallback": "uix:deposit-lump-sum",
	});
}

export default Component;
