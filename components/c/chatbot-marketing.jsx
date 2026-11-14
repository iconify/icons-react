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
		"content": `<style>.rz7d-bw5m {
  d: path("M2.5 5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-8.5l-4 3.5v-3.5H5A2.5 2.5 0 0 1 2.5 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voeq-kvaz {
  d: path("M7 6h10v8H7Zm3 4h.01M14 10h.01");
}
</style><g class="ulnmmdpxh"><path class="rz7d-bw5m"/><path class="voeq-kvaz"/></g>`,
		"fallback": "uix-sharp:chatbot-marketing",
	});
}

export default Component;
