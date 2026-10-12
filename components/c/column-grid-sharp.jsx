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
		"content": `<style>.e3n0ggkzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h4.17v16.5H2.75zm7.17 0h4.16v16.5H9.92zm7.16 0h4.17v16.5h-4.17z");
}
</style><path class="e3n0ggkzn"/>`,
		"fallback": "iconoven:column-grid-sharp",
	});
}

export default Component;
