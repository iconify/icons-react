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
		"content": `<style>.cogfnkbdq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 8.75h.01m4.49 0h.01");
}

.f4runtyfh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.85 7.58a1.6 1.6 0 1 1 2.31-1.81m5.68 0a1.6 1.6 0 1 1 2.31 1.81");
}

.f56oy8b3i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.25h18.5V21H2.75z");
}

.pstr52bjb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 16.5h.01m6.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z_5ae7dxc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12.25V10.5c0-3.25 2.5-5.25 6-5.25s6 2 6 5.25v1.75Z");
}
</style><g class="ux2u0rbkq"><path class="z_5ae7dxc"/><path class="f4runtyfh"/><path class="cogfnkbdq"/><path class="f56oy8b3i"/><path class="pstr52bjb"/></g>`,
		"fallback": "iconoven:hippo-sharp",
	});
}

export default Component;
