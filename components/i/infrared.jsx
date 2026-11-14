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
		"content": `<style>.m94csui7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15V8.5a3.5 3.5 0 0 1 7 0V15Zm2 0v5m3-5v5m5-13.5q1.5-2 3 0t3 0q1.25-1.75 2.5 0M13 12q1.5-2 3 0t3 0q1.25-1.75 2.5 0M13 17.5q1.5-2 3 0t3 0q1.25-1.75 2.5 0");
}
</style><path class="m94csui7s"/>`,
		"fallback": "uix-sharp:infrared",
	});
}

export default Component;
