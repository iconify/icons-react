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
		"content": `<style>.n0wg4ib8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.63 17.39a6.25 4.5-20 1 0 11.74-4.28a6.25 4.5-20 1 0-11.74 4.28M7.75 11l4.5-7.75m-1.25 8l4.5-7.75M14.25 12l4.5-7.75M6 18.75l-2.25 2.5m1-9.5l-2-2.25");
}
</style><path class="n0wg4ib8j"/>`,
		"fallback": "iconoven:bagpipe",
	});
}

export default Component;
