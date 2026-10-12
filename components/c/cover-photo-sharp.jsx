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
		"content": `<style>.djehm2q_a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v12.5H2.75z");
}

.h45tvc41r {
  cx: 7.5px;
  cy: 16.5px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l8g09tbkc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 19.5h6.5");
}

.q85mm5_2q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 12L15 9l2.25 2.25L18.5 10l2.25 2.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w205a0y0g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7h.01");
}
</style><g class="ux2u0rbkq"><path class="djehm2q_a"/><path class="q85mm5_2q"/><path class="w205a0y0g"/><circle class="h45tvc41r"/><path class="l8g09tbkc"/></g>`,
		"fallback": "iconoven:cover-photo-sharp",
	});
}

export default Component;
