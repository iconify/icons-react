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
		"content": `<style>.hxu-h5bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h12v10h-12Zm12 3.5H18l3.5 3.5v3h-7M5.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm10.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8.5 8.75v5.5M6 11.5h5");
}
</style><path class="hxu-h5bcl"/>`,
		"fallback": "uix-sharp:health-ambulance-cover",
	});
}

export default Component;
