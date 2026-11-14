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
		"content": `<style>.br_el82oj {
  d: path("M10.5 9v4.5l1.5 5l1.5-5V9");
}

.h-i3wyhbb {
  d: path("M2.5 15h5v3.5h9V15h5v6.5h-19Zm7-12.5h5V9h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-i3wyhbb"/><path class="br_el82oj"/></g>`,
		"fallback": "uix-sharp:cnc-router",
	});
}

export default Component;
