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
		"content": `<style>.m9o_vsbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.268 14.197l1.833-5.5A1.75 1.75 0 0 1 6.761 7.5h10.478a1.75 1.75 0 0 1 1.66 1.197l1.833 5.5a1.75 1.75 0 0 1-1.66 2.303H4.928a1.75 1.75 0 0 1-1.66-2.303m.982-2.947h15.5");
}
</style><path class="m9o_vsbdk"/>`,
		"fallback": "uix:aluminium-ingot",
	});
}

export default Component;
