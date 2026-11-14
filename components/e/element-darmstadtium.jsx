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

.j94-3p-mz {
  d: path("M5.5 11h2a3.5 3.5 0 0 1 0 7h-2ZM18 14.25c-.5-.75-3.5-1-3.5.5c0 1.25 3.5 1 3.5 2.25c0 1.5-3 1.5-3.75.5M5.5 5.25V8m2.25-2.75V8m2.75-2.75a1 1.375 0 0 1 0 2.75a1 1.375 0 0 1 0-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="j94-3p-mz"/></g>`,
		"fallback": "uix-sharp:element-darmstadtium",
	});
}

export default Component;
