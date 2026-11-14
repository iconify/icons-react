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
		"content": `<style>.la3o9w5_l {
  d: path("M4.5 13h-2V9.5A1.5 1.5 0 0 1 4 8h2l2.25-4A2 2 0 0 1 10 3h4a2 2 0 0 1 1.75 1L18 8h2a1.5 1.5 0 0 1 1.5 1.5V13H18m-4 0H8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wydsyxtuf {
  d: path("M4.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 8h12m-3 12l2.25-2.25h4.5V22h-4.5Zm4 0h.01");
}
</style><g class="ulnmmdpxh"><path class="la3o9w5_l"/><path class="wydsyxtuf"/></g>`,
		"fallback": "uix-sharp:car-for-sale",
	});
}

export default Component;
