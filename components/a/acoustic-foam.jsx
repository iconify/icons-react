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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va8_244wh {
  d: path("M3 15.5L6 8l3 7.5L12 8l3 7.5L18 8l3 7.5");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="va8_244wh"/></g>`,
		"fallback": "uix-sharp:acoustic-foam",
	});
}

export default Component;
