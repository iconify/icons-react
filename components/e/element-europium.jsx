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

.jtgf3rbha {
  d: path("M10.25 8H6.5v8h3.75M6.5 12h3.25m3.5-1v3a2 2 0 0 0 4 0v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="jtgf3rbha"/></g>`,
		"fallback": "uix-sharp:element-europium",
	});
}

export default Component;
