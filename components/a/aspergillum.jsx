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
		"content": `<style>.hy9zjp-ua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.328 5.172za3 3 0 0 1 0 4.242l-1.414 1.414a3 3 0 0 1-4.242 0a3 3 0 0 1 0-4.242l1.414-1.414a3 3 0 0 1 4.242 0M12.75 10.75L4.5 19M15 17h.01m3.49-.5h.01m1.99-3h.01");
}
</style><path class="hy9zjp-ua"/>`,
		"fallback": "uix:aspergillum",
	});
}

export default Component;
