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

.xzcuepbhx {
  d: path("M6.5 17.5c5.5 0 5.5-11 11-11m-11 11h.01m10.99-11h.01");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="xzcuepbhx"/></g>`,
		"fallback": "uix-sharp:curves-rgb",
	});
}

export default Component;
