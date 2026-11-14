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
		"content": `<style>.u_hv_c06g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5L3.5 13H9l-1 8.5L15 11H9.5Zm5 18.5l2.75-7L21 21m-4.5-2.25H20");
}
</style><path class="u_hv_c06g"/>`,
		"fallback": "uix-sharp:flash-auto",
	});
}

export default Component;
