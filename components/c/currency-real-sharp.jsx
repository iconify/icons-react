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
		"content": `<style>.ceex-dd5q {
  d: path("M7 15.5v-7h3.1v3.7H7m2.5 0l1 3.3m6.02-6.12A1.75 1.75 0 1 0 15 12a1.75 1.75 0 1 1-1.52 2.62M15 7v1.5m0 7V17");
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ceex-dd5q"/></g>`,
		"fallback": "iconoven:currency-real-sharp",
	});
}

export default Component;
