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
		"content": `<style>.ft74snbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L12 3l9.5 5Zm0 11.5h9.9m8.8 0h.3M6 11v5m4-5v5m4-5v4.3m4-4.3v3.8M14.75 18l2 2L21 15.75");
}
</style><path class="ft74snbbn"/>`,
		"fallback": "uix:courthouse-check",
	});
}

export default Component;
