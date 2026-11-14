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
		"content": `<style>.lkfecxb8k {
  d: path("M3 21.5V9h5V3.5h8V9h5v12.5ZM12 9v5.5m-2.75-2.75h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuom80bix {
  d: path("M10 21.5v-4h4v4M5.5 13h.01m-.01 4h.01m12.99-4h.01m-.01 4h.01");
}
</style><g class="ulnmmdpxh"><path class="lkfecxb8k"/><path class="vuom80bix"/></g>`,
		"fallback": "uix-sharp:hospital-nearby",
	});
}

export default Component;
