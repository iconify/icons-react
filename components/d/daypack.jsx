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
		"content": `<style>.hpsqe1b6i {
  d: path("M7 6h10a2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm3.25 0V4.75a1.75 1.75 0 0 1 3.5 0V6");
}

.hv_b-1bzg {
  d: path("M7.5 13.5h9v5h-9Zm1.25-7v7m6.5-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpsqe1b6i"/><path class="hv_b-1bzg"/></g>`,
		"fallback": "uix-sharp:daypack",
	});
}

export default Component;
