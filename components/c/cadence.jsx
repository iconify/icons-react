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
		"content": `<style>.d34aqkbfk {
  d: path("M11.5 9H15v3h-3.5Z");
}

.r-fbcjv7k {
  d: path("M8 3h8l4 18H4Zm4 14l2-10.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r-fbcjv7k"/><path class="d34aqkbfk"/></g>`,
		"fallback": "uix-sharp:cadence",
	});
}

export default Component;
