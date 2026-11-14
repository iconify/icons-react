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
		"content": `<style>.pcl9wg7bq {
  d: path("M9.75 7.25a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0ZM2.5 12l9.5 5l9.5-5");
}

.r82yjackc {
  d: path("M2.5 10h19v11.5h-19ZM4 10V5.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r82yjackc"/><path class="pcl9wg7bq"/></g>`,
		"fallback": "uix-sharp:account-salary",
	});
}

export default Component;
