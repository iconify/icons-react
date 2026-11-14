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
		"content": `<style>.zv241zbbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18v5.5H3Zm3 0V9m4 6V9m4 6V9m4 6V9M8 5q2-2.5 4 0t4 0");
}
</style><path class="zv241zbbg"/>`,
		"fallback": "uix-sharp:heat-sink",
	});
}

export default Component;
