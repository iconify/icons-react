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
		"content": `<style>.ubu-mpbiy {
  d: path("M5.5 16.25s-2.75-2-2.75-4.75a1.6 1.6 0 0 1 2.75-1.1a1.6 1.6 0 0 1 2.75 1.1c0 2.75-2.75 4.75-2.75 4.75Zm5.25-8h10.5v7.5h-10.5z");
}

.uhkypxb0y {
  d: path("M13.25 10.75h4v2.5h-4z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ubu-mpbiy"/><path class="uhkypxb0y"/></g>`,
		"fallback": "iconoven:health-bar-sharp",
	});
}

export default Component;
