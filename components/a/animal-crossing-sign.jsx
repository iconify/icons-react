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
		"content": `<style>.dt5xhob-d {
  d: path("M8.25 14.75L10 12.5h3.5l1.75 1.75M13.5 12.5L15 10h1.5M15 10l-.5-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="dt5xhob-d"/></g>`,
		"fallback": "uix-sharp:animal-crossing-sign",
	});
}

export default Component;
