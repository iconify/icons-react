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
		"content": `<style>.m0gxfb3hd {
  d: path("M3 3h8l10 10l-8 8L3 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y57rek7yn {
  d: path("M5.75 7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.75 7.5l4-4m-5-.5h.01M15 14.5h.01");
}
</style><g class="ulnmmdpxh"><path class="m0gxfb3hd"/><path class="y57rek7yn"/></g>`,
		"fallback": "uix-sharp:deal-discount",
	});
}

export default Component;
