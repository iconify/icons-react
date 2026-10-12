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
		"content": `<style>.r-f11_wvo {
  d: path("M14 8.25V12l2.5 1.5m-13.75-5h2.5M2.75 12H4.5m-1.75 3.5h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqztkowql {
  cx: 14px;
  cy: 12px;
  r: 7.25px;
}
</style><g class="x2cwu0gfd"><circle class="xqztkowql"/><path class="r-f11_wvo"/></g>`,
		"fallback": "iconoven:clock-fast-sharp",
	});
}

export default Component;
