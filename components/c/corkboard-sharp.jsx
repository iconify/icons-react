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
		"content": `<style>.i0_zsfb4j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7h4.5v6h-4.5Zm6.75 2h5.75v7.5H12.5Z");
}

.l7yfq-b6e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.nwc26uc6p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 9.5h.01m7.39 2h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="l7yfq-b6e"/><path class="i0_zsfb4j"/><path class="nwc26uc6p"/></g>`,
		"fallback": "iconoven:corkboard-sharp",
	});
}

export default Component;
