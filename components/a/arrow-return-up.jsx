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
		"content": `<style>.c2z2nuu0k {
  d: path("M5.5 9v5.5a4.5 4.5 0 0 0 9 0v-10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj3kwjbbo {
  d: path("m10.5 8.5l4-4l4 4");
}
</style><g class="ulnmmdpxh"><path class="c2z2nuu0k"/><path class="yj3kwjbbo"/></g>`,
		"fallback": "uix-sharp:arrow-return-up",
	});
}

export default Component;
