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
		"content": `<style>.s0dx_1ihv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.55 6h8.9a2.625 2.625 0 0 1 2.547 1.988l1.688 6.75A2.625 2.625 0 0 1 18.138 18H5.862a2.625 2.625 0 0 1-2.547-3.262l1.688-6.75A2.625 2.625 0 0 1 7.55 6M6.5 9.5h11m-12 5h13");
}
</style><path class="s0dx_1ihv"/>`,
		"fallback": "uix:changing-mat",
	});
}

export default Component;
