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
		"content": `<style>.fx6xsklwp {
  d: path("M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.n2r71mb8b {
  d: path("M3.5 8V5.5a2 2 0 0 1 2-2H8m8 0h2.5a2 2 0 0 1 2 2V8m0 8v2.5a2 2 0 0 1-2 2H16m-8 0H5.5a2 2 0 0 1-2-2V16M7 10a1.5 1.5 0 0 1 1.5-1.5H10L11 7h2l1 1.5h1.5A1.5 1.5 0 0 1 17 10v6a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n2r71mb8b"/><path class="fx6xsklwp"/></g>`,
		"fallback": "uix-sharp:camera-motion-zone",
	});
}

export default Component;
