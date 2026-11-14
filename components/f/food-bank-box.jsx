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
		"content": `<style>.d14t-mbkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 7.5L3 11v9.5h10.26M16 11.84V11l3.5-3M3 11h13M6.5 4.5a3 1.5 0 1 0 6 0a3 1.5 0 1 0-6 0m0 0V11m6-6.5V11M18 21.5l-3-3.25a2 2 0 1 1 3-2.5a2 2 0 1 1 3 2.5Z");
}
</style><path class="d14t-mbkv"/>`,
		"fallback": "uix:food-bank-box",
	});
}

export default Component;
