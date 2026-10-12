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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.j04l9lb7n {
  d: path("M5.5 14.5h6m-5.5 0a2.5 2.5 0 0 1 5 0M8.5 12v-1.5M13.75 8v3.5h2.5V8M15 11.5V16m3.5-8v8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="j04l9lb7n"/></g>`,
		"fallback": "iconoven:airline-meal-sharp",
	});
}

export default Component;
