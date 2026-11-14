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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw5figbll {
  d: path("M6.5 17V7H9a2 2 0 0 1 0 4H6.5M9 11h.5a3 3 0 0 1 0 6h-3m8.75-10.5V17m3-6.5l-3 3l3 3.5");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="zw5figbll"/></g>`,
		"fallback": "uix-sharp:element-berkelium",
	});
}

export default Component;
