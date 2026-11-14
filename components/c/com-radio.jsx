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
		"content": `<style>.ys8v-cc0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8h4a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18v-6.5A3.5 3.5 0 0 1 10 8M9 8V2.5m.25 9h5.5m-5.5 3h5.5m-5.5 3h5.5");
}
</style><path class="ys8v-cc0k"/>`,
		"fallback": "uix:com-radio",
	});
}

export default Component;
