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
		"content": `<style>.kdgv2bbhr {
  d: path("M11.2 20.5H2.5v-18h18v8.7m-12-8.7v18m6-18v8.7m-12-2.7h18m-18 6h8.7m-5.7-3h.01m5.99-6h.01");
}

.kxeil3b5a {
  d: path("M14 14h7v7h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kdgv2bbhr"/><path class="kxeil3b5a"/></g>`,
		"fallback": "uix-sharp:board-game-family",
	});
}

export default Component;
