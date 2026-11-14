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
		"content": `<style>.c03bxnbtk {
  d: path("M15.5 14h3.75l2.25 2.25v5.25h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7frdd_wm {
  d: path("M12.744 20.5H3.5v-10L12 3.25l8.5 7.25v.856");
}
</style><g class="ulnmmdpxh"><path class="x7frdd_wm"/><path class="c03bxnbtk"/></g>`,
		"fallback": "uix-sharp:estate-planning",
	});
}

export default Component;
