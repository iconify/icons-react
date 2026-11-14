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
		"content": `<style>.xu5lxemuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v15m0-14.5h10l-2.5 3.75L20 11H10M4 21q6-6 12 0Z");
}
</style><path class="xu5lxemuu"/>`,
		"fallback": "uix:capture-flag",
	});
}

export default Component;
