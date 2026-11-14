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
		"content": `<style>.of-4j3b7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-3h6v-3h6v-3h7v9ZM17.116 4.227l3.096 3.096a1.5 1.5 0 0 1 0 2.122l-1.767 1.767a1.5 1.5 0 0 1-2.122 0l-3.096-3.096a1.5 1.5 0 0 1-.439-1.061V5.288a1.5 1.5 0 0 1 1.5-1.5h1.767a1.5 1.5 0 0 1 1.061.439M15.97 6.97h.01");
}
</style><path class="of-4j3b7z"/>`,
		"fallback": "uix:discount-tiered",
	});
}

export default Component;
