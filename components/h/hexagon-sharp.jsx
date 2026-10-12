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
		"content": `<style>.hazq3_bed {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.5 13.73l-2.75 4.77l-1 1.73h-9.5l-1-1.73l-2.75-4.77l-1-1.73l1-1.73L6.25 5.5l1-1.73h9.5l1 1.73l2.75 4.77l1 1.73z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="hazq3_bed"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:hexagon-sharp",
	});
}

export default Component;
