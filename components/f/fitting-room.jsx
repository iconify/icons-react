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
		"content": `<style>.nutky8bkx {
  d: path("M13.4 21.5H3V4h13.5v7.6M2 4h15.5");
}

.oi62m6euu {
  d: path("M9 4c0 6 .75 12 1.5 17.5M6 4c0 6 .5 12 .75 17.5m8.75-6.75l1.75-.5q1 1.25 2 0l1.75.5l1 2.75l-1.75.75v3.5h-4v-3.5l-1.75-.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nutky8bkx"/><path class="oi62m6euu"/></g>`,
		"fallback": "uix-sharp:fitting-room",
	});
}

export default Component;
