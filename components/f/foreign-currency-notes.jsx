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
		"content": `<style>.l0ophfb1q {
  d: path("M3 6.5h18v11H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjt6vd7qb {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-3 0h.01m10.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="l0ophfb1q"/><path class="zjt6vd7qb"/></g>`,
		"fallback": "uix-sharp:foreign-currency-notes",
	});
}

export default Component;
