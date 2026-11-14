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
		"content": `<style>.f7v_pybrh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 14.5V11q0-1.5 1.5-1.5l1.5-3.5h3.5l1.5 3.5q1.5 0 1.5 1.5v3.5M2.5 10h2v9h-2Zm17 0h2v9h-2Zm-15 4.5h15");
}
</style><path class="f7v_pybrh"/>`,
		"fallback": "uix-sharp:car-deadlift",
	});
}

export default Component;
