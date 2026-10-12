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
		"content": `<style>.drk7r8b2q {
  d: path("M14.5 7.5v9a2 2 0 1 0 2-2h-9a2 2 0 1 0 2 2v-9a2 2 0 1 0-2 2h9a2 2 0 1 0-2-2");
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
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="drk7r8b2q"/></g>`,
		"fallback": "iconoven:command-key-sharp",
	});
}

export default Component;
