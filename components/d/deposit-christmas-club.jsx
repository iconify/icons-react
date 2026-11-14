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
		"content": `<style>.cwjcbbcny {
  d: path("M4 12c0-3.5 3.5-6 8-6s8 2.5 8 6c0 2.25-1.25 4-3.5 5v2.5H14v-1.75c-.75.25-1.25.25-2 .25s-1.25 0-2-.25v1.75H7.5V17C5.25 16 4 14.25 4 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfuxv9bxs {
  d: path("M4.5 10.5h-2v3h2m3.25-2.75h.01M10.5 8.5h3m-1.5-3C10.75 2.75 8 2 8 4c0 1 2 1.75 4 1.5m0 0C13.25 2.75 16 2 16 4c0 1-2 1.75-4 1.5");
}
</style><g class="ulnmmdpxh"><path class="cwjcbbcny"/><path class="vfuxv9bxs"/></g>`,
		"fallback": "uix-sharp:deposit-christmas-club",
	});
}

export default Component;
