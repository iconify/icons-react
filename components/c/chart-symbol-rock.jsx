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
		"content": `<style>.jatasi_5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 15l4.5-7.5L11 11l3.5-7L20 15M2.5 19.5q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="jatasi_5d"/>`,
		"fallback": "uix:chart-symbol-rock",
	});
}

export default Component;
