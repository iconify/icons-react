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
		"content": `<style>.fwgc7k0gs {
  d: path("M5.25 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25 0l1.25 1.25L14 5.25m2.5 1.25h2.25M5.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25 0l1.25 1.25l2.25-2.5M16.5 12h2.25m-13.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25 0l1.25 1.25l2.25-2.5m2.5 1.25h2.25");
}

.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="fwgc7k0gs"/></g>`,
		"fallback": "uix-sharp:attendance-record",
	});
}

export default Component;
