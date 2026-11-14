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
		"content": `<style>.f8-7hacbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5V4h16v10.4M7.75 4v10.5M13.25 4v10.5M2.5 9.25h16m3 5.75L18 20c-.75 1-2.25 1.5-3.25.75m.75-3.25h.01");
}
</style><path class="f8-7hacbg"/>`,
		"fallback": "uix:field-hockey-goal",
	});
}

export default Component;
