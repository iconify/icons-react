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
		"content": `<style>.nrlzyomze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v5H4ZM2.5 11h19v3h-19Zm4-3.5V11m11-3.5V11M5 14v7m14-7v7");
}
</style><path class="nrlzyomze"/>`,
		"fallback": "uix-sharp:garden-bench",
	});
}

export default Component;
