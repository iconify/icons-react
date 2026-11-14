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
		"content": `<style>.g0ywq7jsc {
  d: path("m4 20.5l7-12.25c1.5-2.75 5-4.75 7-2.75C19.5 7 19 10 17 11");
}

.om4tbr29h {
  d: path("M17 11c3 2 3 5 0 7l2 3h-4l2-3c-3-2-3-5 0-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g0ywq7jsc"/><path class="om4tbr29h"/></g>`,
		"fallback": "uix-sharp:gaff-hook",
	});
}

export default Component;
