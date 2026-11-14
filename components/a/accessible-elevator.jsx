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
		"content": `<style>.gkr1njy3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3H9a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 9 21H6.5A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3m1.25 0v18M18 3v6.5m-2.75-3.75L18 3l2.75 2.75M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="gkr1njy3k"/>`,
		"fallback": "uix:accessible-elevator",
	});
}

export default Component;
