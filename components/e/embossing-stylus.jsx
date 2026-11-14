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
		"content": `<style>.ezknac2uj {
  d: path("M2.5 19h6a3.5 3.5 0 0 1 7 0h6");
}

.po6g1ib9v {
  d: path("M10.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm2.5-1l2.75-2.75m3.914-6.036l2.122 2.122l-4.95 4.95l-2.122-2.122Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ezknac2uj"/><path class="po6g1ib9v"/></g>`,
		"fallback": "uix-sharp:embossing-stylus",
	});
}

export default Component;
