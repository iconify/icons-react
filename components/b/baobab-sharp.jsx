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
		"content": `<style>.s97qw1-3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 21.25c-1-3.75-.75-7.25 1.75-10l.25-.5V9.5h3.5v1.25l.25.5c2.5 2.75 2.75 6.25 1.75 10Zm2.5-11.75l-5.5-3.25m5.5 3.25l-1.5-5.75m4 5.75l5.5-3.25m-5.5 3.25l1.5-5.75m-12 2.5h4.5m0-2.5H11m2 0h3.75m0 2.5h4.5");
}
</style><path class="s97qw1-3e"/>`,
		"fallback": "iconoven:baobab-sharp",
	});
}

export default Component;
