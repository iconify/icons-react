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
		"content": `<style>.f5-pdybga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.5h10A1.5 1.5 0 0 1 18.5 6A1.5 1.5 0 0 1 17 7.5H7A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 7 4.5m3 3h4a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18v-7A3.5 3.5 0 0 1 10 7.5m4-3L16.5 2m-7 8.5v8");
}
</style><path class="f5-pdybga"/>`,
		"fallback": "uix:insulated-tumbler",
	});
}

export default Component;
