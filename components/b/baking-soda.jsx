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
		"content": `<style>.hqpnb7b7t {
  d: path("M9 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.kcn6b7w2n {
  d: path("M5 6.5h14v15H5Zm0 0l2-3.75h10l2 3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kcn6b7w2n"/><path class="hqpnb7b7t"/></g>`,
		"fallback": "uix-sharp:baking-soda",
	});
}

export default Component;
