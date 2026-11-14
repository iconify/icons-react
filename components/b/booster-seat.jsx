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
		"content": `<style>.j8gozuakr {
  d: path("M7 3a2.5 2.5 0 0 0-2.5 2.5V19A1.5 1.5 0 0 0 6 20.5h12.5A1.5 1.5 0 0 0 20 19v-2a1.5 1.5 0 0 0-1.5-1.5h-9v-10A2.5 2.5 0 0 0 7 3Z");
}

.n00rk2bmf {
  d: path("M9.5 11H20v4.5H9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j8gozuakr"/><path class="n00rk2bmf"/></g>`,
		"fallback": "uix-sharp:booster-seat",
	});
}

export default Component;
