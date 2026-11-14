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
		"content": `<style>.teo9snm9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12c2-4 4.5-5 7.5-5s5.5 2.5 6.5 5c-1 2.5-3.5 5-6.5 5s-5.5-1-7.5-5m0 0L3 7.5c.5 2 1.5 3.5 2 4.5c-.5 1-1.5 2.5-2 4.5Zm10.5-.5h.01m-4.76-1h.01");
}
</style><path class="teo9snm9q"/>`,
		"fallback": "uix:haddock",
	});
}

export default Component;
