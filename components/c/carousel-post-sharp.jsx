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
		"content": `<style>.avxuucwnd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h15v13.5h-15zM21.25 6v7.25");
}

.qk7vcsg8v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12.75L9 9.5l2.25 2.25l1.5-1.5l2.25 2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ymzp3_bfp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 20h.01m2.99 0h.01m2.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="avxuucwnd"/><path class="qk7vcsg8v"/><path class="ymzp3_bfp"/></g>`,
		"fallback": "iconoven:carousel-post-sharp",
	});
}

export default Component;
