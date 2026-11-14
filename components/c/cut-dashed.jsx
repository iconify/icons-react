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
		"content": `<style>.a-lc24blg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.75-7.75L15 15m-7.75.25L15 9m3 3h.01m3.49 0h.01");
}
</style><path class="a-lc24blg"/>`,
		"fallback": "uix:cut-dashed",
	});
}

export default Component;
