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
		"content": `<style>.i84_-sbbe {
  d: path("M6.25 4.25a8 8 0 0 1 8 8v7");
}

.inichvbyb {
  d: path("m10.5 15.5l3.75 3.75L18 15.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i84_-sbbe"/><path class="inichvbyb"/></g>`,
		"fallback": "iconoven:arrow-turn-down-sharp",
	});
}

export default Component;
