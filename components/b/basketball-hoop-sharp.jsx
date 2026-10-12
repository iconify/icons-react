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
		"content": `<style>.nbr5cub3t {
  d: path("M9.25 12.25v-4.5h5.5v4.5m-7.25 0l1.5 8.5h6l1.5-8.5m-6 0l4 8.5m-1-8.5l-4 8.5");
}

.wh4c3ibmm {
  d: path("M3.25 2.75h17.5v9.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wh4c3ibmm"/><path class="nbr5cub3t"/></g>`,
		"fallback": "iconoven:basketball-hoop-sharp",
	});
}

export default Component;
