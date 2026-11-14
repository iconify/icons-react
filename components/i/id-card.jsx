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
		"content": `<style>.a5snxebws {
  d: path("M7.25 8.5h1.5a1.75 1.75 0 0 1 1.75 1.75v3A1.75 1.75 0 0 1 8.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 7.25 8.5M13.5 10h5m-5 3.5H17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="a5snxebws"/></g>`,
		"fallback": "uix:id-card",
	});
}

export default Component;
