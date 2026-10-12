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
		"content": `<style>.htweieb1l {
  d: path("m3.5 20.75l3.26-3.67m2.64-3L18.75 3.5m0 0v13a2.25 2.25 0 0 1-4.5 0v-.75");
}

.po2i4dbso {
  cx: 8.08px;
  cy: 15.58px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="htweieb1l"/><circle class="po2i4dbso"/></g>`,
		"fallback": "iconoven:fishing-rod-sharp",
	});
}

export default Component;
