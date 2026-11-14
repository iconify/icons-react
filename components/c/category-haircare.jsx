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
		"content": `<style>.fpe7jpb1m {
  d: path("M11.5 9a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.k-sd47bxl {
  d: path("M12.5 6L7 4.25v9.5L12.5 12m1.75 2l1 6q0 1.5 1.5 1.5h1.5q1.5 0 1.25-1.5l-1-6.5M14.75 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 5.5H4M2.5 9H4m-1.5 3.5H4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fpe7jpb1m"/><path class="k-sd47bxl"/></g>`,
		"fallback": "uix-sharp:category-haircare",
	});
}

export default Component;
