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
		"content": `<style>.tl03xkb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h8v16h-8Zm11 0h8v16h-8Zm-3 8h3M5.25 8h2.5m8.5 0h2.5M6.5 15.5h.01m10.99 0h.01");
}
</style><path class="tl03xkb7j"/>`,
		"fallback": "uix-sharp:active-active",
	});
}

export default Component;
