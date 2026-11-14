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
		"content": `<style>.qe75ddbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.238 15.5H2.5C2.5 8.5 6.5 4 11 4c3.624 0 6.924 2.919 8.071 7.711M6.25 11.25l1-1.75m3-1.5H12m2.75 1.5l1 1.75M18 14.5V18m0 3h.01");
}
</style><path class="qe75ddbqk"/>`,
		"fallback": "uix-sharp:allergen-sesame",
	});
}

export default Component;
