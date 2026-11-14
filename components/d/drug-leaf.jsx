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
		"content": `<style>.apk1t8bzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17C4 9 9 3 19 3c0 10-6 15-14 14Zm0 0l-2.5 2.5M5 17l7.5-7.5m1.788 9.487l4.949-4.949l2.475 2.475l-4.949 4.949Zm2.475-2.474l2.474 2.474");
}
</style><path class="apk1t8bzj"/>`,
		"fallback": "uix-sharp:drug-leaf",
	});
}

export default Component;
