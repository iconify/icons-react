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
		"content": `<style>.ke-ab0ccj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9.5h12.5v9.25H5.75zm2.5-5.25h7.5V7h-7.5zM12 2.75v1.5M2.75 11v5.5m0-2.75h3M21.25 11v5.5m-3-2.75h3");
}

.m4k5yjb6l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 14h.01M12 14h.01M15 14h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ke-ab0ccj"/><path class="m4k5yjb6l"/></g>`,
		"fallback": "iconoven:engine-sharp",
	});
}

export default Component;
