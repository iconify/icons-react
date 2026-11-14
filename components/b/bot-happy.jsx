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
		"content": `<style>.di9td_-ow {
  d: path("M7 13.5a1.5 1.5 0 0 1 3 0m4 0a1.5 1.5 0 0 1 3 0m-7 3c1 1.5 3 1.5 4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yru40db1x {
  d: path("M5.5 7h13a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM12 2.5V7");
}
</style><g class="ulnmmdpxh"><path class="yru40db1x"/><path class="di9td_-ow"/></g>`,
		"fallback": "uix-sharp:bot-happy",
	});
}

export default Component;
