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
		"content": `<style>.l4l10nrhp {
  d: path("M4.5 2.5c0 4.5 9 4.5 9 9.5s-9 5-9 9.5");
}

.mkiyar3do {
  d: path("M13.5 2.5c0 4.5-9 4.5-9 9.5s9 5 9 9.5m-8.75-11h8.5m-8.5 3h8.5M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4l10nrhp"/><path class="mkiyar3do"/></g>`,
		"fallback": "uix-sharp:evolution-arrow",
	});
}

export default Component;
