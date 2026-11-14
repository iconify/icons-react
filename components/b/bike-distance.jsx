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
		"content": `<style>.ogvp-17ai {
  d: path("M5.75 12L9 6h6.5l2.75 6M9 6l2.5 6l4-6m0 0l-.75-2.5H17M3 20h18M4.75 18.25L3 20l1.75 1.75m14.5-3.5L21 20l-1.75 1.75");
}

.q_7u0b8nx {
  d: path("M2.25 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q_7u0b8nx"/><path class="ogvp-17ai"/></g>`,
		"fallback": "uix-sharp:bike-distance",
	});
}

export default Component;
