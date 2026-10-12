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
		"content": `<style>.b-bjh4akn {
  d: path("M8.13 5.5h7.75v7.75H8.13zm-5.38 7.75h7.75v8H2.75zm10.75 0h7.75v8H13.5z");
}

.e1e0cdm7h {
  d: path("M10.25 11.25L12 7.5l1.75 3.75M10.85 10h2.3M7.9 15.65a2 2 0 1 0 0 3.2m7.6-3.6h4l-4 4h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b-bjh4akn"/><path class="e1e0cdm7h"/></g>`,
		"fallback": "iconoven:abc-blocks-sharp",
	});
}

export default Component;
