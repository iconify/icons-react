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
		"content": `<style>.bn5q8s7bc {
  d: path("M5.25 18.5L12 11.75l6.75 6.75");
}

.g12pkbboi {
  d: path("M5.25 12.25L12 5.5l6.75 6.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bn5q8s7bc"/><path class="g12pkbboi"/></g>`,
		"fallback": "iconoven:chevrons-up-to-line-sharp",
	});
}

export default Component;
