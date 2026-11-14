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
		"content": `<style>.e28a8eb4b {
  d: path("M2.5 21h19M3.5 6h4v15h-4ZM9 3.5h4V21H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vh_7qgb1p {
  d: path("m10.824 8.478l3.864-1.036l3.494 13.04l-3.864 1.036ZM3.5 9.5h4M9 7h4");
}
</style><g class="ulnmmdpxh"><path class="e28a8eb4b"/><path class="vh_7qgb1p"/></g>`,
		"fallback": "uix-sharp:book-row",
	});
}

export default Component;
