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
		"content": `<style>.ek_q-xb8w {
  d: path("M6.25 2.5h14v19h-14Zm-2.5 4H8.5M3.75 12H8.5m-4.75 5.5H8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq9511bvr {
  d: path("M11.25 6h6v4h-6Z");
}
</style><g class="ulnmmdpxh"><path class="ek_q-xb8w"/><path class="uq9511bvr"/></g>`,
		"fallback": "uix-sharp:binder",
	});
}

export default Component;
