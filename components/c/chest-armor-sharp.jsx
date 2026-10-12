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
		"content": `<style>.dtq883zar {
  d: path("M6.5 3.25H9C9.5 5 10.5 6 12 6s2.5-1 3-2.75h2.5l.379 4.174L20.75 8.5l-1 6.5C19.5 18.5 16 21.25 12 21.25S4.5 18.5 4.25 15l-1-6.5l2.871-1.076zM12 9v5");
}

.p1erp238d {
  d: path("M5.5 16c4 1.75 9 1.75 13 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dtq883zar"/><path class="p1erp238d"/></g>`,
		"fallback": "iconoven:chest-armor-sharp",
	});
}

export default Component;
