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
		"content": `<style>.heaxqh-aa {
  d: path("M13.7 21.5H4.5v-19h15v8.4M8 6.5h1.5m5 0H16m-8 4h1.5m5 0H16m-8 4h1.5");
}

.k85vdacio {
  d: path("M10.5 21.5v-3.25h2.05M13.5 21v.5m6.5-5.25c-.25-.75-1-1.25-2-1.25c-1.1 0-1.75.6-1.75 1.5c0 1.75 3.75 1 3.75 3c0 .9-.75 1.5-2 1.5c-1 0-1.75-.5-2-1.25m2-6V15m0 6v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="heaxqh-aa"/><path class="k85vdacio"/></g>`,
		"fallback": "uix-sharp:hoa-fees",
	});
}

export default Component;
