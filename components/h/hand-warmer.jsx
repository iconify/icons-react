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
		"content": `<style>.kcf2c5b4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 10.5h5.5A5.25 5.25 0 0 1 20 15.75A5.25 5.25 0 0 1 14.75 21h-5.5A5.25 5.25 0 0 1 4 15.75a5.25 5.25 0 0 1 5.25-5.25M9 7.5C7.5 6 10.5 4.5 9 3m6 4.5c-1.5-1.5 1.5-3 0-4.5");
}
</style><path class="kcf2c5b4d"/>`,
		"fallback": "uix:hand-warmer",
	});
}

export default Component;
