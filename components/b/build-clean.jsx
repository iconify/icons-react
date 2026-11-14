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
		"content": `<style>.i8vdqvdqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5q1 6.5 7.5 7.5q-6.5 1-7.5 7.5Q9 14 2.5 13Q9 12 10 5.5ZM18.5 3q.35 2.15 2.5 2.5q-2.15.35-2.5 2.5q-.35-2.15-2.5-2.5q2.15-.35 2.5-2.5Z");
}
</style><path class="i8vdqvdqf"/>`,
		"fallback": "uix-sharp:build-clean",
	});
}

export default Component;
