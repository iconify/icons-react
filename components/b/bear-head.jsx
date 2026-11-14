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
		"content": `<style>.jdrenqb2u {
  d: path("M4 12.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.jizlfsbyr {
  d: path("M5 8.5A2.75 2.75 0 1 1 9.25 5m5.5 0A2.75 2.75 0 1 1 19 8.5M8.25 15a3.75 2.5 0 1 0 7.5 0a3.75 2.5 0 1 0-7.5 0ZM12 14h.01M8.5 10h.01m6.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdrenqb2u"/><path class="jizlfsbyr"/></g>`,
		"fallback": "uix-sharp:bear-head",
	});
}

export default Component;
