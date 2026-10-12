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
		"content": `<style>.ht6wh6bnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h7.5v4.5H5zm7.5 4.5H20V13h-7.5zm0-4.5H20v4.5M5 13h7.5M5 3v1m0 4.5V21");
}
</style><path class="ht6wh6bnp"/>`,
		"fallback": "iconoven:flag-checkered",
	});
}

export default Component;
