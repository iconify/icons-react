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
		"content": `<style>.fxvl4ub9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.716 9.703Q14.518 8.427 15 7V3h6q0 .709-.056 1.416t-.167 1.407t-.277 1.389t-.385 1.364t-.492 1.329t-.595 1.286t-.694 1.235t-.789 1.177m-3.948 3.947q-.573.417-1.177.788q-.603.371-1.234.693t-1.286.594t-1.328.491t-1.362.385t-1.389.277t-1.406.166T3 21v-6h4q1.426-.482 2.7-1.282M3.5 3.5l17 17");
}
</style><path class="fxvl4ub9p"/>`,
		"fallback": "uix-sharp:call-barring",
	});
}

export default Component;
