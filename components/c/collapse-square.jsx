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
		"content": `<style>.ai2bfy3sv {
  d: path("M5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcwg4cb5h {
  d: path("M9.5 6.5L12 9l2.5-2.5m-5 11L12 15l2.5 2.5m-7-5.5h9");
}
</style><g class="ulnmmdpxh"><path class="ai2bfy3sv"/><path class="wcwg4cb5h"/></g>`,
		"fallback": "uix-sharp:collapse-square",
	});
}

export default Component;
