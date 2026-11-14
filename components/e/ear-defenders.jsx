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
		"content": `<style>.fnhutj1xr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 10.5v-1a6.25 6.25 0 0 1 12.5 0v1m-14.75 0H8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm12.5 0h4.5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}
</style><path class="fnhutj1xr"/>`,
		"fallback": "uix-sharp:ear-defenders",
	});
}

export default Component;
