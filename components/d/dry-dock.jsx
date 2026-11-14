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
		"content": `<style>.b5j-_fbnq {
  d: path("M3 4.5v15h18v-15");
}

.k_-bicc8z {
  d: path("M6 8h12l-2 7.5H8Zm4 7.5v4m4-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5j-_fbnq"/><path class="k_-bicc8z"/></g>`,
		"fallback": "uix-sharp:dry-dock",
	});
}

export default Component;
