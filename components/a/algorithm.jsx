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
		"content": `<style>.ptdis_38i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10V6H7ZM12 6v2.75L16.5 12L12 15.25L7.5 12L12 8.75m0 6.5V18m-5 0h10v3.5H7Z");
}
</style><path class="ptdis_38i"/>`,
		"fallback": "uix-sharp:algorithm",
	});
}

export default Component;
