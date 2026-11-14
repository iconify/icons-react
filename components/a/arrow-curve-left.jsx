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
		"content": `<style>.e18d4acjl {
  d: path("M8.5 4.5L5 8l3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt014lbom {
  d: path("M18.5 20c0-7.5-5-12-13.5-12");
}
</style><g class="ulnmmdpxh"><path class="vt014lbom"/><path class="e18d4acjl"/></g>`,
		"fallback": "uix-sharp:arrow-curve-left",
	});
}

export default Component;
