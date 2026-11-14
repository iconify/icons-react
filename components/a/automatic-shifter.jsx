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
		"content": `<style>.e99dmxbkn {
  d: path("M5 10h14v11.5H5Zm7-2v4.75m-2.75-7.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.mxpotnb1d {
  d: path("M10.5 12.75h3v6h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e99dmxbkn"/><path class="mxpotnb1d"/></g>`,
		"fallback": "uix-sharp:automatic-shifter",
	});
}

export default Component;
