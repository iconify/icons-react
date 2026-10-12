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
		"content": `<style>.h3evfab5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h14.5l2.108-.007L20.03 5.38l-5.78 7.12v5.9l.004.621l-.554.279l-2.5 1.25l-1.461.736l.011-1.636V12.5L3.97 5.38L2.642 3.743zm2.5 3.5h9.5");
}
</style><path class="h3evfab5s"/>`,
		"fallback": "iconoven:filter-plus-sharp",
	});
}

export default Component;
