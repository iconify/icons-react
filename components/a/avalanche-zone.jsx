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
		"content": `<style>.g-t64-_xz {
  d: path("M7.5 10.25L9.25 12L11 10.5l2-.25m-7.279 8.568a6.5 6.5 0 0 1 2.101-3.297m2.496-1.3a6.5 6.5 0 0 1 3.364 0m2.496 1.3a6.5 6.5 0 0 1 2.101 3.297");
}

.ulk6tbbid {
  d: path("M2.5 20L10 5.5l3.5 5.5l2-2.5l6 11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ulk6tbbid"/><path class="g-t64-_xz"/></g>`,
		"fallback": "uix-sharp:avalanche-zone",
	});
}

export default Component;
