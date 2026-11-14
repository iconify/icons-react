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
		"content": `<style>.qy4jaeb3a {
  d: path("m8.5 14.5l3.5-3.25l3.5 3.25V18h-7Z");
}

.r38fteblr {
  d: path("M3 8.5h18v12H3ZM7 3v5.5M17 3v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r38fteblr"/><path class="qy4jaeb3a"/></g>`,
		"fallback": "uix-sharp:dept-household-sign",
	});
}

export default Component;
