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
		"content": `<style>.buxz0vb3w {
  d: path("M10 6.5L7.5 9l2.5 2.5m4-5L16.5 9L14 11.5m3.75 2c.5 3.25 1 3.75 4.25 4.25c-3.25.5-3.75 1-4.25 4.25c-.5-3.25-1-3.75-4.25-4.25c3.25-.5 3.75-1 4.25-4.25Z");
}

.c3tano2tn {
  d: path("M14.8 21.5H4.5v-19h15V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3tano2tn"/><path class="buxz0vb3w"/></g>`,
		"fallback": "uix-sharp:code-sparkle",
	});
}

export default Component;
