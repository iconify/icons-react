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
		"content": `<style>.fpqdrwbwc {
  d: path("M7.327 13.264a3.75 3.75 0 0 1 3.409 3.409M7.632 9.778a7.25 7.25 0 0 1 6.59 6.59");
}

.rv7nk5rxi {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17ZM7 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rv7nk5rxi"/><path class="fpqdrwbwc"/></g>`,
		"fallback": "uix-sharp:category-smart-home",
	});
}

export default Component;
