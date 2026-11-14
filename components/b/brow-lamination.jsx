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
		"content": `<style>.rl4e2np9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5C7 6 12.5 4 19 4.5l2 3c-6 0-11.5 2-16 5.75q-1.5.25-2-1.75Zm15 3q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}
</style><path class="rl4e2np9b"/>`,
		"fallback": "uix-sharp:brow-lamination",
	});
}

export default Component;
