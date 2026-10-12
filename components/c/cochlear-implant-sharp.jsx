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
		"content": `<style>.op5c37b6j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.25c3 0 4-2 4.5-4.5s3.5-3.5 3.5-7a6 6 0 0 0-12 0");
}

.qnd9t7bws {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 15.5h.01");
}

.ur0-15hxo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-1.5 3.5m4.75-3.75l2.75 1.179v2.821");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zhvhhokwo {
  cx: 18.5px;
  cy: 15.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="op5c37b6j"/><path class="ur0-15hxo"/><circle class="zhvhhokwo"/><path class="qnd9t7bws"/></g>`,
		"fallback": "iconoven:cochlear-implant-sharp",
	});
}

export default Component;
