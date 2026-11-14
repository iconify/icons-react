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
		"content": `<style>.eord7ibqx {
  d: path("M15.25 20.75c0-4.25 1.75-6 5.75-6c0 4-1.5 6-5.75 6Zm-.5.75l3-3.25");
}

.r-26nac3w {
  d: path("M11.844 20.5H3.5v-10L12 3.25l8.5 7.25v1.456");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r-26nac3w"/><path class="eord7ibqx"/></g>`,
		"fallback": "uix-sharp:house-leaf",
	});
}

export default Component;
