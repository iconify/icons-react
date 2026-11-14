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
		"content": `<style>.quhi12boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 18.5l8-8l2 2l-8 8Zm-.75-.75l3.5 3.5M18 2.5c2.25 2.25 3 4 3 6a3 3 0 0 1-6 0c0-2 .75-3.75 3-6Z");
}
</style><path class="quhi12boq"/>`,
		"fallback": "uix-sharp:fire-blow-pipe",
	});
}

export default Component;
