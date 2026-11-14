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
		"content": `<style>.epl7rq6jg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7c0-3 3-3.5 6-3.5S18 4 18 7s-3.5 5-6 5s-6-2-6-5Zm6 5v3.5M4 14q.5 5 4.25 5T12 15.5q0 3.5 3.75 3.5T20 14");
}
</style><path class="epl7rq6jg"/>`,
		"fallback": "uix-sharp:dog-nose",
	});
}

export default Component;
