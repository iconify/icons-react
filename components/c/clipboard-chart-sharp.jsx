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
		"content": `<style>.d3x_iobsj {
  d: path("M8.75 4.25h-4v17h14.5v-17h-4");
}

.nk9o7tbxa {
  d: path("M8.75 2.75h6.5v3.5h-6.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="d3x_iobsj"/><path class="nk9o7tbxa"/></g>`,
		"fallback": "iconoven:clipboard-chart-sharp",
	});
}

export default Component;
