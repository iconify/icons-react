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
		"content": `<style>.fhkckrbqq {
  d: path("M15 4.5h4.5m-5 3l3.5 4m-9.5-4V10c-3 .5-4.5 2.5-4.5 5v4.5a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2V15c0-2.5-1.5-4.5-3-5V7.5");
}

.gbrqekd5k {
  fill: currentColor;
  d: path("M5 2.5h10v5H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gbrqekd5k"/><path class="fhkckrbqq"/></g>`,
		"fallback": "uix-sharp:category-cleaning",
	});
}

export default Component;
