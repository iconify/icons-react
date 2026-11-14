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
		"content": `<style>.z2wv276xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 15.75l1.5-4.5l8.75-8.75l3 3l-8.75 8.75Zm1.5-4.5l3 3M5 19.5c3-2.5 5 2.5 8 0s5 2 7.5 0");
}
</style><path class="z2wv276xi"/>`,
		"fallback": "uix:drawing-pencil-hand",
	});
}

export default Component;
