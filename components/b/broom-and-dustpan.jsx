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
		"content": `<style>.z3opoxbhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5L6.25 13m-3.285 5.876l.984-4.5A1.75 1.75 0 0 1 5.659 13h1.182a1.75 1.75 0 0 1 1.71 1.376l.984 4.5A1.75 1.75 0 0 1 7.826 21H4.674a1.75 1.75 0 0 1-1.709-2.124M12.75 21h8.75v-7c-4 0-6.5 3-8.75 7m-6.5-5v5m15.25-7l-1.75-4.5");
}
</style><path class="z3opoxbhs"/>`,
		"fallback": "uix:broom-and-dustpan",
	});
}

export default Component;
