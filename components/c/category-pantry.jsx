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
		"content": `<style>.qu7f639oj {
  d: path("M4.75 2.5h12v3h-12Zm1 3V19q0 2.5 2.5 2.5h5q2.5 0 2.5-2.5V5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wq7gtcbjx {
  d: path("M16.75 4h2.5v5h-3.5m-8 3h6m-5.5 3.5h.01m4.99 0h.01M10.75 19h.01");
}
</style><g class="ulnmmdpxh"><path class="qu7f639oj"/><path class="wq7gtcbjx"/></g>`,
		"fallback": "uix-sharp:category-pantry",
	});
}

export default Component;
