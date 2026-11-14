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
		"content": `<style>.olfyabbtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-7.5h16a2 2 0 0 1 2 2V20M3 16.5h18m-13.5-4V10A1.5 1.5 0 0 1 9 8.5h10.5A1.5 1.5 0 0 1 21 10v2.5m-10-4v4");
}
</style><path class="olfyabbtd"/>`,
		"fallback": "uix:bed-linen",
	});
}

export default Component;
