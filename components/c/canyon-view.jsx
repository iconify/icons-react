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
		"content": `<style>.nw_5ujbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H7v5h2V13h1.5v4h-8m19-13.5H17v5h-2V13h-1.5v4h8M4 20.5q2-1.5 4 0t4 0t4 0t4 0");
}
</style><path class="nw_5ujbra"/>`,
		"fallback": "uix:canyon-view",
	});
}

export default Component;
