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
		"content": `<style>.ambjqxbvt {
  d: path("m7 10l2.5 2.5l5-5m1 8l5 5m0-5l-5 5");
}

.i0xwa_byh {
  d: path("M11.6 20.5H3.5v-18H19v10.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0xwa_byh"/><path class="ambjqxbvt"/></g>`,
		"fallback": "uix-sharp:fact-check-x",
	});
}

export default Component;
