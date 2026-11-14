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
		"content": `<style>.knmpr7zgh {
  fill: currentColor;
  d: path("M2.5 2.5h3v3h-3Zm16 0h3v3h-3Zm-16 16h3v3h-3Zm16 0h3v3h-3Z");
}

.lw6t35brr {
  d: path("M4 4h16v16H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lw6t35brr"/><path class="knmpr7zgh"/></g>`,
		"fallback": "uix-sharp:canvas-element",
	});
}

export default Component;
