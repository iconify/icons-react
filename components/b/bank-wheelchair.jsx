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
		"content": `<style>.cr71kccgc {
  d: path("M8.5 11.17a5 5 0 1 1-2.198 6.04");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3qblx4qx {
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 4V14h4.5l2 5.5");
}
</style><g class="ulnmmdpxh"><path class="z3qblx4qx"/><path class="cr71kccgc"/></g>`,
		"fallback": "uix-sharp:bank-wheelchair",
	});
}

export default Component;
