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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdmh16v2e {
  d: path("M9 16a3.5 2.75 0 1 0 7 0a3.5 2.75 0 1 0-7 0Zm-3.25-4.5l1 2.25m1.5-7l.75 3m3-4.5v3.5m3.5-2.5l-.25 3.25M18.5 9l-.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="zdmh16v2e"/></g>`,
		"fallback": "uix-sharp:baby-handprint",
	});
}

export default Component;
