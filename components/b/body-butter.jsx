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
		"content": `<style>.sogdc3baq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13h17v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18ZM6 13c0-2.5 2.5-3.5 6-3.5s6 1 6 3.5m-6-3.5c-1-2 0-4.5 3-5");
}
</style><path class="sogdc3baq"/>`,
		"fallback": "uix-sharp:body-butter",
	});
}

export default Component;
