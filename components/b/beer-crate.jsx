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
		"content": `<style>.hpd549bfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 11.5h12.75A2.625 2.625 0 0 1 21 14.125v4.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-4.75A2.625 2.625 0 0 1 5.625 11.5m-.125 0v-3l1-2v-3h1v3l1 2v3m2 0v-3l1-2v-3h1v3l1 2v3m2 0v-3l1-2v-3h1v3l1 2v3m-9 5h5");
}
</style><path class="hpd549bfl"/>`,
		"fallback": "uix:beer-crate",
	});
}

export default Component;
