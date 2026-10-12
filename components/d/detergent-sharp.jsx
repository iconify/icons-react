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
		"content": `<style>.hroqw1bmm {
  d: path("M13.75 9.25h2.5v4.5h-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl5vrybdt {
  d: path("M4.75 19.25V8.75l1.41-1.41l.18-.18l1.41-1.41h11.5v15.5H4.75zm3.5-16.5h4.5v3h-4.5z");
}
</style><g class="x2cwu0gfd"><path class="xl5vrybdt"/><path class="hroqw1bmm"/></g>`,
		"fallback": "iconoven:detergent-sharp",
	});
}

export default Component;
