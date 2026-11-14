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
		"content": `<style>.qjlzmbcuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8v8H3Zm4 8v10.5m-3 0h6m4-17q1.75-1.5 3.5 0t3.5 0M14 9q1.75-1.5 3.5 0T21 9m-7 4.5q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="qjlzmbcuh"/>`,
		"fallback": "uix-sharp:air-quality-station",
	});
}

export default Component;
