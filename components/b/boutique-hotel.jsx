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
		"content": `<style>.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjy7puiqq {
  d: path("m6 12.5l1.5-3h9l1.5 3m-12 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0m-8.5 9v-4.25h5v4.25");
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="yjy7puiqq"/></g>`,
		"fallback": "uix-sharp:boutique-hotel",
	});
}

export default Component;
