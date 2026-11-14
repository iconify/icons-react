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
		"content": `<style>.rk3r_oq0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0Zm6-15.5v12m0-12L18.5 5L12 7.5Z");
}
</style><path class="rk3r_oq0o"/>`,
		"fallback": "uix-sharp:dan-buoy",
	});
}

export default Component;
