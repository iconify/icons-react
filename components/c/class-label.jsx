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
		"content": `<style>.e2mx-m46e {
  d: path("M5.25 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM8 8h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzwhp1bsq {
  d: path("M2.5 2.5H12l9.5 9.5l-9.5 9.5L2.5 12Z");
}
</style><g class="ulnmmdpxh"><path class="vzwhp1bsq"/><path class="e2mx-m46e"/></g>`,
		"fallback": "uix-sharp:class-label",
	});
}

export default Component;
