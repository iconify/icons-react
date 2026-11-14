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
		"content": `<style>.ok1c5wbvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l3-3l3 3l3-3l3 3l3-3l3 3m-16.5 6l3-3l3 3l3-3l3 3l3-3M3 19.5l3-3l3 3l3-3l3 3l3-3l3 3");
}
</style><path class="ok1c5wbvm"/>`,
		"fallback": "uix-sharp:clear-air-turbulence",
	});
}

export default Component;
