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

.w68wbccql {
  d: path("M9.5 10.5h5A2 2 0 1 1 17 12a2 2 0 1 1-2.5 1.5h-5A2 2 0 1 1 7 12a2 2 0 1 1 2.5-1.5Z");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="w68wbccql"/></g>`,
		"fallback": "uix-sharp:element-calcium",
	});
}

export default Component;
