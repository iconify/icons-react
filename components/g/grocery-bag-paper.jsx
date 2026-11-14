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
		"content": `<style>.is19_ccqk {
  d: path("M5 3.5h4.5l2.5 3l2.5-3H19l1 18H4Z");
}

.n84x8cbis {
  d: path("M7.5 11h9v6h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="is19_ccqk"/><path class="n84x8cbis"/></g>`,
		"fallback": "uix-sharp:grocery-bag-paper",
	});
}

export default Component;
