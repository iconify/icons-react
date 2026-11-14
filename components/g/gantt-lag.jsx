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
		"content": `<style>.yv2lgc-9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H10v4H2.5ZM14 17h7.5v4H14Zm-6.5-5h9M9.75 9.75L7.5 12l2.25 2.25m4.5-4.5L16.5 12l-2.25 2.25");
}
</style><path class="yv2lgc-9t"/>`,
		"fallback": "uix-sharp:gantt-lag",
	});
}

export default Component;
