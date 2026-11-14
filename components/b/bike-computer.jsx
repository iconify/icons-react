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
		"content": `<style>.coet2kbql {
  d: path("M9 6h6v6H9Zm3 11v3.5m-9.5 0h19");
}

.m1qr1ab5l {
  d: path("M6 3h12v14H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m1qr1ab5l"/><path class="coet2kbql"/></g>`,
		"fallback": "uix-sharp:bike-computer",
	});
}

export default Component;
