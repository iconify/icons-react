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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.u50s7gb9m {
  d: path("M5.5 11h2a3.5 3.5 0 0 1 0 7h-2Zm8.5 0v7m0-2.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5.5 5.25V8m2.75-2.75a1 1.375 0 0 1 0 2.75a1 1.375 0 0 1 0-2.75m3.75 0h-1.5l-.25 1.25c1.25-.25 1.75.25 1.75.75c0 .75-1 1-1.75.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="u50s7gb9m"/></g>`,
		"fallback": "uix-sharp:element-dubnium",
	});
}

export default Component;
