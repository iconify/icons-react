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
		"content": `<style>.vxhgmsbbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.5-5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M4 5.5L6.5 9m1.25 1.75l3.5 2.5M20 5.5L17.5 9m-1.25 1.75l-3.5 2.5m-.75 2v5.25");
}
</style><path class="vxhgmsbbw"/>`,
		"fallback": "uix:constellation-aquila",
	});
}

export default Component;
