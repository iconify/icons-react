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
		"content": `<style>.j-o94nbsa {
  d: path("m2 7l8 4.5L18 7m-8 4.5V20m10.5-7l-4 4.5h4L16.75 22");
}

.rr1qacwbg {
  d: path("M11.183 19.334L10 20l-8-4.5V7l8-4.5L18 7v4.621");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rr1qacwbg"/><path class="j-o94nbsa"/></g>`,
		"fallback": "uix-sharp:hot-module-reload",
	});
}

export default Component;
