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
		"content": `<style>.irkg7-bdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5H8v15H3.5Zm7.8 15H8v-5h10v2.3M8 9h7.5M11 17.5v.3m0 .4V21m-3 0h5m1.75-3l2 2L21 15.75");
}
</style><path class="irkg7-bdp"/>`,
		"fallback": "uix-sharp:cinema-seats-check",
	});
}

export default Component;
