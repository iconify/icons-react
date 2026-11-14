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
		"content": `<style>.qba97pb0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.75c2.25-5.5 5-8.25 7.5-9.25L11.25 4l4.25 3.25C18 7.5 19.75 9 21.5 11l-3 .75C14 11.25 9.75 13.5 6.25 18l.25 2.75l-1.75-1.5H3Z");
}
</style><path class="qba97pb0h"/>`,
		"fallback": "uix:dolphin",
	});
}

export default Component;
