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
		"content": `<style>.makvcqbia {
  d: path("M15.4 21.5H3v-19h15.5v12.4M3 7h15.5");
}

.toiawxbkk {
  d: path("M6.75 13.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm11.5 1.5q0 3.25 3.25 3.25q-3.25 0-3.25 3.25q0-3.25-3.25-3.25q3.25 0 3.25-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="makvcqbia"/><path class="toiawxbkk"/></g>`,
		"fallback": "uix-sharp:dryer-smart",
	});
}

export default Component;
