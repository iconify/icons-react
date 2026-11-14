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
		"content": `<style>.t2icms1he {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21v-8.5q0-2.5 2-3h3q2 .5 2 3V21m-5-11.5v-6h5l2 2h-4v4M3 21h18");
}
</style><path class="t2icms1he"/>`,
		"fallback": "uix:floor-cleaner",
	});
}

export default Component;
