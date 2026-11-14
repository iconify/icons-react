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
		"content": `<style>.ecr2iyzfa {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-5.5 3c-.25-1-1.25-1.5-2.5-1.5c-1.5 0-2.5.75-2.5 2c0 2.5 5 1.5 5 4.5c0 1.25-1 2-2.5 2c-1.25 0-2.25-.5-2.5-1.25m2.5-8.5V10m0 8.5v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="ecr2iyzfa"/></g>`,
		"fallback": "uix-sharp:ad-invoice",
	});
}

export default Component;
