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
		"content": `<style>.ivll8e7qv {
  d: path("M17.5 10.5h1a2.25 2.25 0 0 1 0 4.5h-2.75M2.5 19h19");
}

.ui_736bse {
  d: path("M4.5 9.5h13v2A4.5 4.5 0 0 1 13 16H9a4.5 4.5 0 0 1-4.5-4.5Zm0 0q6.5-8 13 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ui_736bse"/><path class="ivll8e7qv"/></g>`,
		"fallback": "uix-sharp:cappuccino-cup",
	});
}

export default Component;
