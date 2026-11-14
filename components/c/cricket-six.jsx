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
		"content": `<style>.legrdzc6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-10 11q2.5-10 7-11.25m-8 14.25h19");
}
</style><path class="legrdzc6n"/>`,
		"fallback": "uix:cricket-six",
	});
}

export default Component;
