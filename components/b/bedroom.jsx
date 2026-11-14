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
		"content": `<style>.zp0uwdbph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v7H3Zm0 7v2.5M21 18v2.5M5.5 7.5H11V11H5.5Zm7.5 0h5.5V11H13Z");
}
</style><path class="zp0uwdbph"/>`,
		"fallback": "uix-sharp:bedroom",
	});
}

export default Component;
