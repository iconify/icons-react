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
		"content": `<style>.qxttk1jid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 13.5l2.25 2.25L9 13.5l3 2.25l3-2.25l2.25 2.25l2.25-2.25c0 5-3 8-7.5 8s-7.5-3-7.5-8m4.5 0V11a3 3 0 0 1 6 0v2.5M7.5 5.25a4.5 3.25 0 0 1 9 0Zm8.218 5.466l.532.159a.392.392 0 0 1 0 .75l-.532.159A.558.558 0 0 1 15 11.25a.558.558 0 0 1 .718-.534m-4.468.034h.01");
}
</style><path class="qxttk1jid"/>`,
		"fallback": "uix:chick-hatching",
	});
}

export default Component;
