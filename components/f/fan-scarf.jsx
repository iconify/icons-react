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
		"content": `<style>.sf2n1n1um {
  d: path("M10 10.75L8.5 19.5H13l1-8.75m-4.75 4.5h4.25m-4 4.25v2m2.75-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgemdacqj {
  d: path("M5 2.5v3C5 9.25 8 11 12 11s7-1.75 7-5.5v-3");
}
</style><g class="ulnmmdpxh"><path class="wgemdacqj"/><path class="sf2n1n1um"/></g>`,
		"fallback": "uix-sharp:fan-scarf",
	});
}

export default Component;
