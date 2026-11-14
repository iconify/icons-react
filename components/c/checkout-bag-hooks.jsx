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
		"content": `<style>.aa4mcj76t {
  d: path("M2.5 4h19M4 4v4.5a1.75 1.75 0 0 0 3.5 0v-1M11 4v4.5a1.75 1.75 0 0 0 3.5 0v-1M18 4v4.5a1.75 1.75 0 0 0 3.5 0v-1");
}

.kftlajbcn {
  d: path("m5.75 10.25l-2 7.25a2 2 0 0 0 4 0Zm7 0l-2 7.25a2 2 0 0 0 4 0Zm7 0l-2 7.25a2 2 0 0 0 4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aa4mcj76t"/><path class="kftlajbcn"/></g>`,
		"fallback": "uix-sharp:checkout-bag-hooks",
	});
}

export default Component;
