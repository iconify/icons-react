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
		"content": `<style>.j8x38wg-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 7.5l2.057 4.168l4.6.669l-3.328 3.245l.785 4.581L12 18l-4.114 2.163l.785-4.581l-3.328-3.245l4.6-.669Zm0-5v5");
}
</style><path class="j8x38wg-x"/>`,
		"fallback": "uix-sharp:hanging-star",
	});
}

export default Component;
