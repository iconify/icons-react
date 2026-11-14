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
		"content": `<style>.ggcbvwmhs {
  d: path("M2.5 9H19v10H2.5Zm19 3.5v3");
}

.o-bv1rb-d {
  d: path("M9 14a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 9 14Zm2.75-1.5l3.5-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ggcbvwmhs"/><path class="o-bv1rb-d"/></g>`,
		"fallback": "uix-sharp:battery-cutoff-switch",
	});
}

export default Component;
