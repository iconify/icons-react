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
		"content": `<style>.ixm74vn1a {
  d: path("M2.5 7.5h19v12h-19Zm6 0V5h7v2.5");
}

.rk15j1bvy {
  d: path("M5.5 13.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ixm74vn1a"/><path class="rk15j1bvy"/></g>`,
		"fallback": "uix-sharp:amp-head",
	});
}

export default Component;
