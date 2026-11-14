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
		"content": `<style>.l59c_sg8k {
  d: path("M6 21.5h12a2 2 0 0 0 2-2c0-5.5-4-8.5-6.5-10l2.5-5l-4 2l-4-2l2.5 5C8 11 4 14 4 19.5a2 2 0 0 0 2 2Z");
}

.p70_rgypn {
  d: path("M9.5 18.5c0-3 2-4.75 5-4.75c0 2.75-2 4.75-5 4.75Zm0 0l3-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l59c_sg8k"/><path class="p70_rgypn"/></g>`,
		"fallback": "uix-sharp:compostable-bag",
	});
}

export default Component;
