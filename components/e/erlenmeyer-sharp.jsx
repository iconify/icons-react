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
		"content": `<style>.e355kti5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 7.5h2.5v3.91a5 5 0 1 1-2.5 0ZM10 2.75h4v2.5h-4zM9 15h6");
}
</style><path class="e355kti5f"/>`,
		"fallback": "iconoven:erlenmeyer-sharp",
	});
}

export default Component;
