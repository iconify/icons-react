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
		"content": `<style>.a9bxk79um {
  cx: 7px;
  cy: 19px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jn0v4eh1r {
  cx: 17.5px;
  cy: 19px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m9f7spw1x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 10.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z34r1obsd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5h8.75V14H2.75zm12.75 1h4l1.75 2.5v4H14.5V7.5z");
}
</style><g class="ux2u0rbkq"><path class="z34r1obsd"/><path class="m9f7spw1x"/><circle class="a9bxk79um"/><circle class="jn0v4eh1r"/></g>`,
		"fallback": "iconoven:free-shipping-sharp",
	});
}

export default Component;
