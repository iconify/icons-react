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
		"content": `<style>.hs2l90bby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5H6l1 3l-1.5 1c.75 1.5 2.25 3 3.75 3.75l1.25-1.5l3 1v2a1.75 1.75 0 0 1-1.75 1.75c-5.25 0-9.25-4-9.25-9.25A1.75 1.75 0 0 1 4.25 2.5M18.5 15l3 1v2c0 1.75-1.25 3-3 3.75c-1.75-.75-3-2-3-3.75v-2Z");
}
</style><path class="hs2l90bby"/>`,
		"fallback": "uix:call-police",
	});
}

export default Component;
