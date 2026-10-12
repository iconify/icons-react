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
		"content": `<style>.s0l1t8bfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9H12c4 0 7.3 2.7 8.75 6.5a.75.75 0 0 1-.7 1H3.75a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m2 2.75h8.5m-4 3v1.75m-7.5 3h18.5M7 19.5v1.25m10-1.25v1.25");
}
</style><path class="s0l1t8bfd"/>`,
		"fallback": "iconoven:bullet-train",
	});
}

export default Component;
