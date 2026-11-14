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
		"content": `<style>.hj60lablu {
  d: path("M2.5 12C3.75 9.5 5 8 6.75 8s3 1.5 4.25 4c-1.25 2.5-2.5 4-4.25 4s-3-1.5-4.25-4Zm11.25-1q4 5.5 7.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xez9qwptf {
  d: path("M5.5 12A1.25 1.25 0 1 0 8 12a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="hj60lablu"/><path class="xez9qwptf"/></g>`,
		"fallback": "uix-sharp:eye-wink",
	});
}

export default Component;
