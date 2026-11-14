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
		"content": `<style>.ib3epmbgp {
  d: path("M2.5 2.5h19M7 2.5V6m10-3.5V6M2.5 6h19v15h-19Z");
}

.ipooqyb8m {
  d: path("M5.5 17.5C5.25 14.25 7.25 12 9.75 12h4.5c2.5 0 4.5 2.25 4.25 5.5Zm3.25-1.75l1.25-2m1.5 2l1.25-2m1.5 2l1.25-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ib3epmbgp"/><path class="ipooqyb8m"/></g>`,
		"fallback": "uix-sharp:bakery-aisle",
	});
}

export default Component;
