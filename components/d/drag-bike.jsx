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
		"content": `<style>.ldw6an86d {
  d: path("m6 13l5-4.5h5.5l2 4.5m-2-4.5l1-3M2.5 19h19");
}

.ser4ni41n {
  d: path("M3 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm12.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ser4ni41n"/><path class="ldw6an86d"/></g>`,
		"fallback": "uix-sharp:drag-bike",
	});
}

export default Component;
