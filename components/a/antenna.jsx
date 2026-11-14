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
		"content": `<style>.sp_bpjd1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7.75a6 6 0 0 0 8.5 8.5ZM10 18v3m-3.5 0h7M15 6.25A2.75 2.75 0 0 1 17.75 9M15 3.25A5.75 5.75 0 0 1 20.75 9");
}
</style><path class="sp_bpjd1k"/>`,
		"fallback": "uix:antenna",
	});
}

export default Component;
