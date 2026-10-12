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
		"content": `<style>.c9elq579y {
  d: path("M4.25 6.25c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5M4.25 12c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5");
}

.dm6fc8-ju {
  d: path("M4.25 6.25c0-1.95 3.45-3.5 7.75-3.5s7.75 1.55 7.75 3.5v11.5c0 1.95-3.45 3.5-7.75 3.5s-7.75-1.55-7.75-3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dm6fc8-ju"/><path class="c9elq579y"/></g>`,
		"fallback": "iconoven:database-schema-sharp",
	});
}

export default Component;
