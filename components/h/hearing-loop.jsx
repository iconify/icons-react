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
		"content": `<style>.dhusckb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a5.75 5.75 0 0 1 11.5 0c0 3.5-3.5 4.5-3.5 7.25a3.25 3.25 0 0 1-6 1.75m1-8.5a2.75 2.75 0 0 1 5.5 0m4-5.25h5.25m-2.65 0v7.5");
}
</style><path class="dhusckb4f"/>`,
		"fallback": "iconoven:hearing-loop",
	});
}

export default Component;
