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
		"content": `<style>.k0j7chc5n {
  d: path("M9.5 6h5v9h-5Zm0 3h5");
}

.p6ja0gd_l {
  d: path("M9.5 12h-3l-4 6h15l4-6h-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p6ja0gd_l"/><path class="k0j7chc5n"/></g>`,
		"fallback": "uix-sharp:floor-plane",
	});
}

export default Component;
