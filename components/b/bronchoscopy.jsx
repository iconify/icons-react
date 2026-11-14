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
		"content": `<style>.qf-fpujjl {
  d: path("M21.5 2.5c-3 1.5-5 4.5-5 8.5M15 12.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zq7aso-0q {
  d: path("M10.5 7c-3-.5-7 3.5-7 9c0 2.75 1.5 4.25 3.5 3.75s3.5-1.5 3.5-3.75Zm3 0c3-.5 7 3.5 7 9c0 2.75-1.5 4.25-3.5 3.75s-3.5-1.5-3.5-3.75ZM12 2.5v5M10.5 9L12 7.5L13.5 9");
}
</style><g class="ulnmmdpxh"><path class="zq7aso-0q"/><path class="qf-fpujjl"/></g>`,
		"fallback": "uix-sharp:bronchoscopy",
	});
}

export default Component;
