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
		"content": `<style>.kka-q1blt {
  d: path("M7.75 14.25a4.25 4.25 0 0 1 8.5 0m-4.25 0l2.25-2.75");
}

.lzigsob4k {
  d: path("M12 20.5c-4.75-3.25-8.75-6.5-8.75-11A4.55 4.55 0 0 1 12 7.25a4.55 4.55 0 0 1 8.75 2.25c0 4.5-4 7.75-8.75 11Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lzigsob4k"/><path class="kka-q1blt"/></g>`,
		"fallback": "iconoven:blood-pressure-sharp",
	});
}

export default Component;
