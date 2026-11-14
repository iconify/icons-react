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
		"content": `<style>.i63wbqccw {
  d: path("M2.5 20h4v-3h3v-3h3v-3h3V8h6v3l-9 9Z");
}

.oo8vqmwgc {
  d: path("M2.5 14.5H5L14.5 5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i63wbqccw"/><path class="oo8vqmwgc"/></g>`,
		"fallback": "uix-sharp:escalator-up",
	});
}

export default Component;
