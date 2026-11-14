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
		"content": `<style>.pjuzei2en {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4.5h7.25A2.625 2.625 0 0 1 15 7.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-7.25A2.625 2.625 0 0 1 2.5 10.875v-3.75A2.625 2.625 0 0 1 5.125 4.5m14.375 0v9m-1.5-9h3M18 9h3m-3 4.5h3M2.5 18q2.25-1.5 4.75 0Q9.5 19.5 12 18q2.25-1.5 4.75 0q2.25 1.5 4.75 0");
}
</style><path class="pjuzei2en"/>`,
		"fallback": "uix:ice-thickness",
	});
}

export default Component;
