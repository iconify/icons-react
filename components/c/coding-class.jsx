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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn27ryble {
  d: path("M8.25 7L6 10l2.25 3m7.5-6L18 10l-2.25 3M13 6.5l-2 7");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="xn27ryble"/></g>`,
		"fallback": "uix-sharp:coding-class",
	});
}

export default Component;
