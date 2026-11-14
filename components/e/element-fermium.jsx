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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.q0zt8qu7r {
  d: path("M9.5 8H6v8m0-4h3m3 4v-3.5a1.5 1.5 0 0 1 3 0V16m0-3.5a1.5 1.5 0 0 1 3 0V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="q0zt8qu7r"/></g>`,
		"fallback": "uix-sharp:element-fermium",
	});
}

export default Component;
