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
		"content": `<style>.e1z94g_xq {
  d: path("M7 3h10v8.5H7Zm5 8.5v3m-9.5 0h19");
}

.s5uy7f0db {
  d: path("M10.5 7.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 18.5h10M15.5 17l1.5 1.5l-1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e1z94g_xq"/><path class="s5uy7f0db"/></g>`,
		"fallback": "uix-sharp:camera-slider",
	});
}

export default Component;
