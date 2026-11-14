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
		"content": `<style>.irvr2obtk {
  d: path("M8.5 15v-4a3.5 3.5 0 0 1 7 0v4m-12 0h7v3.5h-7Zm10 0h7v3.5h-7ZM7 16.75h.01m9.99 0h.01");
}

.s5l9cgcsq {
  d: path("M5.5 15v-4a6.5 6.5 0 0 1 13 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5l9cgcsq"/><path class="irvr2obtk"/></g>`,
		"fallback": "uix-sharp:bag-handle",
	});
}

export default Component;
