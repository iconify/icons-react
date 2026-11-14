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
		"content": `<style>.qt5q48lkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 21l3-13.5h5l3 13.5M8 14.25h8M12 3za1.25 1.25 0 0 1 1.25 1.25v2A1.25 1.25 0 0 1 12 7.5a1.25 1.25 0 0 1-1.25-1.25v-2A1.25 1.25 0 0 1 12 3M8 14.25L17.5 21M16 14.25L6.5 21");
}
</style><path class="qt5q48lkd"/>`,
		"fallback": "uix:cell-tower-lattice",
	});
}

export default Component;
