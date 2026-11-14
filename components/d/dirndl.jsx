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
		"content": `<style>.lhy1nqj-c {
  d: path("M7.5 2.5H10q2 4 4 0h2.5V7l-1 4l5 9.5q-8.5 2-17 0l5-9.5l-1-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z19dtwbcw {
  d: path("m12 11l-1.75-1.5v3Zm0 0l1.75-1.5v3Z");
}
</style><g class="ulnmmdpxh"><path class="lhy1nqj-c"/><path class="z19dtwbcw"/></g>`,
		"fallback": "uix-sharp:dirndl",
	});
}

export default Component;
