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
		"content": `<style>.v3j-b1bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="v3j-b1bxs"/>`,
		"fallback": "uix:ellipsis-symbol",
	});
}

export default Component;
