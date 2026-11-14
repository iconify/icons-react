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
		"content": `<style>.zcix0rkzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m13-4H20a1.75 1.75 0 0 1 1.75 1.75v4.25A1.75 1.75 0 0 1 20 20.25h-4.25A1.75 1.75 0 0 1 14 18.5v-4.25a1.75 1.75 0 0 1 1.75-1.75m-2.254-7.536l1.14 1.878A1.75 1.75 0 0 1 13.14 9.5h-2.28a1.75 1.75 0 0 1-1.496-2.658l1.14-1.878a1.75 1.75 0 0 1 2.992 0");
}
</style><path class="zcix0rkzd"/>`,
		"fallback": "uix:diversity-inclusion",
	});
}

export default Component;
