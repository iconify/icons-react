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
		"content": `<style>.h8orxz11n {
  d: path("M3 15.75a2 4.75 0 1 0 4 0a2 4.75 0 1 0-4 0Zm5.5-5.25L11 21l2.5-10.75L16 21M6 7l11-4.5M18 7L7 2.5");
}

.n2wspok0t {
  d: path("M5 11q7-1.5 14 0a2 4.75 0 0 1 0 9.5q-7 1.5-14 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n2wspok0t"/><path class="h8orxz11n"/></g>`,
		"fallback": "uix-sharp:dhol-drum",
	});
}

export default Component;
