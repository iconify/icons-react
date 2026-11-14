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
		"content": `<style>.krbfcis-x {
  d: path("M4.75 10.5c1 1.5 2.5 1.5 3.5 0m7.5 6.5c1-1.5 2.5-1.5 3.5 0");
}

.o_b24ebdz {
  d: path("M2.5 4.5c2.5-1 5.5-1 8 0v5c0 3-1.5 5-4 5s-4-2-4-5Zm11 5c2.5-1 5.5-1 8 0v5c0 3-1.5 5-4 5s-4-2-4-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o_b24ebdz"/><path class="krbfcis-x"/></g>`,
		"fallback": "uix-sharp:drama-masks",
	});
}

export default Component;
