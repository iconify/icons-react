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
		"content": `<style>.zq5px2fix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11a6 6 0 0 1 12 0M3 11h18M4.5 14.5H10m3 0h6.5M7 18h10");
}
</style><path class="zq5px2fix"/>`,
		"fallback": "uix-sharp:haze",
	});
}

export default Component;
