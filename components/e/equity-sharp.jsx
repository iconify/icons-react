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
		"content": `<style>.e5-3wqbcf {
  d: path("M2.75 4.75h18.5v14.5H2.75zM6.25 9h3m-3 3h3m-3 3h3");
}

.t-cts4bra {
  d: path("M15.25 9a3 3 0 1 0 3 3h-3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e5-3wqbcf"/><path class="t-cts4bra"/></g>`,
		"fallback": "iconoven:equity-sharp",
	});
}

export default Component;
