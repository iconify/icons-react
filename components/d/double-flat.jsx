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
		"content": `<style>.vfzi0xbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v17.5M5 14c1.5-2.5 5.5-3 5.5 0s-3 5-5.5 6.5M13.5 3v17.5m0-6.5c1.5-2.5 5.5-3 5.5 0s-3 5-5.5 6.5");
}
</style><path class="vfzi0xbfy"/>`,
		"fallback": "uix:double-flat",
	});
}

export default Component;
