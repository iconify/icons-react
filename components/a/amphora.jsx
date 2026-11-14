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
		"content": `<style>.ekq8oobvf {
  d: path("M10 3h4v3c3.5 1.5 4.5 5 3.5 8.5c-.75 2.5-3.5 5-5.5 6.5c-2-1.5-4.75-4-5.5-6.5c-1-3.5 0-7 3.5-8.5Z");
}

.p-nmuepmn {
  d: path("M10 4.75C7.5 4.75 6.25 6 6.75 8.5M14 4.75c2.5 0 3.75 1.25 3.25 3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ekq8oobvf"/><path class="p-nmuepmn"/></g>`,
		"fallback": "uix-sharp:amphora",
	});
}

export default Component;
