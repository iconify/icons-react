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
		"content": `<style>.lzsc-fs0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5a5 1.5 0 1 0 10 0a5 1.5 0 1 0-10 0m5 1.5v8.5m-2 0h4M3.5 6v14.5m0-6.5h4v6.5M20.5 6v14.5m0-6.5h-4v6.5");
}
</style><path class="lzsc-fs0y"/>`,
		"fallback": "uix:garden-table-chairs",
	});
}

export default Component;
