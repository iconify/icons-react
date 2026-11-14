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
		"content": `<style>.o7scx8b7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h5l1.5 2.5h5L16 12h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5.75-5.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l1.5 1.5");
}
</style><path class="o7scx8b7x"/>`,
		"fallback": "uix:inbox-search",
	});
}

export default Component;
