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
		"content": `<style>.addikumnm {
  d: path("M2 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm14 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voc1u5q4k {
  d: path("m5 15l3-5h6.5l-2 5Zm14 0l-3-8.5h-2.5");
}
</style><g class="ulnmmdpxh"><path class="addikumnm"/><path class="voc1u5q4k"/></g>`,
		"fallback": "uix-sharp:directions-motorbike",
	});
}

export default Component;
