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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w99mslb1b {
  d: path("m4 10l8-6.5l8 6.5v11H4Z");
}

.yyfjq05-z {
  d: path("M7 12h10v3.5H7Zm3.25 0v3.5m3.5-3.5v3.5");
}
</style><g class="ulnmmdpxh"><path class="w99mslb1b"/><path class="yyfjq05-z"/></g>`,
		"fallback": "uix-sharp:clerestory-window",
	});
}

export default Component;
