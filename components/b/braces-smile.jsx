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
		"content": `<style>.h-n8gxbdr {
  d: path("M2.5 7h19c0 6.5-4 10.5-9.5 10.5S2.5 13.5 2.5 7Zm2 4h15");
}

.tc3pp3d2r {
  d: path("M5.5 10.25H7v1.5H5.5Zm3.75 0h1.5v1.5h-1.5Zm4 0h1.5v1.5h-1.5Zm3.75 0h1.5v1.5H17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-n8gxbdr"/><path class="tc3pp3d2r"/></g>`,
		"fallback": "uix-sharp:braces-smile",
	});
}

export default Component;
