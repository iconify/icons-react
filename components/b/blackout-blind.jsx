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
		"content": `<style>.axl1_6ihl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4A1.5 1.5 0 0 1 20 5.5H4A1.5 1.5 0 0 1 2.5 4A1.5 1.5 0 0 1 4 2.5m.5 3v14A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-14M4.5 15h15m-3 0v3.25");
}
</style><path class="axl1_6ihl"/>`,
		"fallback": "uix:blackout-blind",
	});
}

export default Component;
