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
		"content": `<style>.jhhmu8bph {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.mypupkt7c {
  d: path("M17 12h.01m-2.51 4.25h.01m-5.01 0h.01M7 12h.01M9.5 7.75h.01m4.99 0h.01M4.5 4.5h.01m14.99 0h.01M4.5 19.5h.01m14.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jhhmu8bph"/><path class="mypupkt7c"/></g>`,
		"fallback": "uix-sharp:electron-cloud",
	});
}

export default Component;
