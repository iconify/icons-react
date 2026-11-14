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
		"content": `<style>.q4o2fgtps {
  d: path("M14.8 21.5H4v-19h16v8.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvrg0zbqd {
  d: path("M7 5h10v6H7Zm-.5 8.75h9.1m-8.85 3.5h.01m2.49 0h.01m2.49 0h.01m3.49.75h.01m1.935-1.945a2.75 2.75 0 0 1 0 3.89m2.268-5.48a5.5 5.5 0 0 1 0 7.07");
}
</style><g class="ulnmmdpxh"><path class="q4o2fgtps"/><path class="yvrg0zbqd"/></g>`,
		"fallback": "uix-sharp:atm-contactless",
	});
}

export default Component;
