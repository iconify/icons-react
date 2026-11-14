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
		"content": `<style>.bmpqicbzu {
  d: path("M8 6h13.5m-19 10H16M2.5 6H8l8 10h5.5");
}

.h1em_abxm {
  d: path("m19 13.5l2.5 2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bmpqicbzu"/><path class="h1em_abxm"/></g>`,
		"fallback": "uix-sharp:change-lines",
	});
}

export default Component;
