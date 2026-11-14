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
		"content": `<style>.nfgo0bcou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5a5.5 5.5 0 0 1 11 0v10.25a1.25 1.25 0 0 1-2.5 0V16.5H6.5Zm5.5 8v5M9.5 7v5");
}
</style><path class="nfgo0bcou"/>`,
		"fallback": "uix:ice-lolly",
	});
}

export default Component;
