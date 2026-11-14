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
		"content": `<style>.rfm7fh07i {
  d: path("M6 14.5q6 3.5 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9mnqtbpi {
  d: path("M5 9.25a3 3 0 1 1 5 0h4a3 3 0 1 1 5 0c1.75 1.25 2.5 3 2.5 4.75c0 4-4.5 6-9.5 6s-9.5-2-9.5-6c0-1.75.75-3.5 2.5-4.75ZM7.5 7.5h.01m8.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="w9mnqtbpi"/><path class="rfm7fh07i"/></g>`,
		"fallback": "uix-sharp:bullfrog",
	});
}

export default Component;
