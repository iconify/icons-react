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
		"content": `<style>.kdgu2y04b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h.01M4 9.5h.01m-.01 6h.01M8 3.5h12m-12 6h12m-12 6h3.5M15 21l5.25-5.25m-4-.25h4.25v4.25");
}
</style><path class="kdgu2y04b"/>`,
		"fallback": "uix:creditors-list",
	});
}

export default Component;
