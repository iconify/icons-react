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
		"content": `<style>.jwv9o7bpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h16A1.5 1.5 0 0 1 21.5 7A1.5 1.5 0 0 1 20 8.5H4A1.5 1.5 0 0 1 2.5 7A1.5 1.5 0 0 1 4 5.5m5 0v3m6-3v3m-10 0v10m14-10v10m-10.5-5h7M10 12l-1.5 1.5L10 15m4-3l1.5 1.5L14 15");
}
</style><path class="jwv9o7bpx"/>`,
		"fallback": "uix:extendable-table",
	});
}

export default Component;
