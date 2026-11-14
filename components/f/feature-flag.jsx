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
		"content": `<style>.hvmbwrgzr {
  d: path("M5.5 2.5h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z");
}

.sw_u05b5s {
  d: path("M13.25 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.25 7.75v6.25m0-6.25H21l-1.5 2l1.5 2h-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hvmbwrgzr"/><path class="sw_u05b5s"/></g>`,
		"fallback": "uix-sharp:feature-flag",
	});
}

export default Component;
