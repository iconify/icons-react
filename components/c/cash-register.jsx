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
		"content": `<style>.i0qez6vsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h8v4.5H4Zm4 4.5V10m-3.5 0h15l1.5 6.5H3ZM3 16.5v3A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-3M8 13.25h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="i0qez6vsr"/>`,
		"fallback": "uix-sharp:cash-register",
	});
}

export default Component;
