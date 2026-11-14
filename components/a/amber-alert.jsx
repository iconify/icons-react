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
		"content": `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.quenbx46y {
  d: path("M7.75 14h8.5L15 12.5v-3a3 3 0 0 0-6 0v3Zm3 3h2.5");
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="quenbx46y"/></g>`,
		"fallback": "uix:amber-alert",
	});
}

export default Component;
