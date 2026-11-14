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
		"content": `<style>.ezc8ddbtc {
  d: path("m12 5.5l2 2h2.5V10l2 2l-2 2v2.5H14l-2 2l-2-2H7.5V14l-2-2l2-2V7.5H10Z");
}

.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="ezc8ddbtc"/></g>`,
		"fallback": "uix-sharp:arabesque-tile",
	});
}

export default Component;
