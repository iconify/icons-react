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
		"content": `<style>.ccgro45ii {
  d: path("M3 7.5h18V21H3Z");
}

.hey4kh-pk {
  d: path("m6.5 18l4-5l3 3.5l1.75-1.75l2.25 2.5m-1.5-6h.01M7.5 7.5L12 3l4.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ccgro45ii"/><path class="hey4kh-pk"/></g>`,
		"fallback": "uix-sharp:frame-shop",
	});
}

export default Component;
