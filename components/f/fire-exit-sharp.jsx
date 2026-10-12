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
		"content": `<style>.czclxrbgq {
  d: path("M14 18.25V6h4.25v12.25M6.5 13.5H12M9.5 11l2.5 2.5L9.5 16M8 6l1.75 1.4v1.35a1.75 1.75 0 0 1-3.5 0v-1z");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="czclxrbgq"/></g>`,
		"fallback": "iconoven:fire-exit-sharp",
	});
}

export default Component;
