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
		"content": `<style>.muxb4bcza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13c0-3 10-3 10 0v3c0 3-2 5.5-5 5.5S7 19 7 16Zm0 1.5L3 11m6.25 0L7.5 3.5m4.5 7.25V2.5m2.75 8.5l1.75-7.5M17 13l3.5-3.5");
}
</style><path class="muxb4bcza"/>`,
		"fallback": "uix-sharp:hand-fingers-spread",
	});
}

export default Component;
