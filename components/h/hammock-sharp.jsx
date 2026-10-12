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
		"content": `<style>.uebhhd02r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17.75m17-17.75v17.75M3.5 7.5L7 11m13.5-3.5L17 11M7 11h10c-1 4-3 5.75-5 5.75S8 15 7 11Z");
}
</style><path class="uebhhd02r"/>`,
		"fallback": "iconoven:hammock-sharp",
	});
}

export default Component;
