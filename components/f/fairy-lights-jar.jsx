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
		"content": `<style>.wjyjoeuvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10V6H7ZM8 6v1.5c-2 1-2.5 2-2.5 4V19A2.5 2.5 0 0 0 8 21.5h8a2.5 2.5 0 0 0 2.5-2.5v-7.5c0-2-.5-3-2.5-4V6m-6.5 6.5h.01M14.5 14h.01m-4.01 3.5h.01");
}
</style><path class="wjyjoeuvm"/>`,
		"fallback": "uix-sharp:fairy-lights-jar",
	});
}

export default Component;
