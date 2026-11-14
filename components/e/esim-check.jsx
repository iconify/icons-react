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
		"content": `<style>.bxpviy_9j {
  d: path("M14.271 21.5H3.5v-19h9l5 5v7.829");
}

.ofc9bqbqr {
  d: path("M7 7.5h6v6H7ZM14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bxpviy_9j"/><path class="ofc9bqbqr"/></g>`,
		"fallback": "uix-sharp:esim-check",
	});
}

export default Component;
