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
		"content": `<style>.mstvgy4gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.5a1.75 1.75 0 0 1 0-3.5h16.5a1.75 1.75 0 0 1 0 3.5M7.5 3v15m9-15v15M7 18h10a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20v-.5A1.5 1.5 0 0 1 7 18m5-8.5V15");
}
</style><path class="mstvgy4gm"/>`,
		"fallback": "uix:column-corinthian",
	});
}

export default Component;
