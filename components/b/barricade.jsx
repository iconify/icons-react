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
		"content": `<style>.w4fan-b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 4.5h12.75A2.625 2.625 0 0 1 21 7.125v.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 7.875v-.75A2.625 2.625 0 0 1 5.625 4.5m3.125 6l3-6m3 6l3-6M6 10.5L3.5 19M18 10.5l2.5 8.5");
}
</style><path class="w4fan-b-p"/>`,
		"fallback": "uix:barricade",
	});
}

export default Component;
