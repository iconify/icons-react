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
		"content": `<style>.axlrqabvj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.25 14.5h.01m.74 3h.01m-.76 3h.01");
}

.bwxqewb6v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.75h5v4.75h6.25v4H12v1.75H6v-10.5zm.5 0V3H11v7.75Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="bwxqewb6v"/><path class="axlrqabvj"/></g>`,
		"fallback": "iconoven:inhaler-alert-sharp",
	});
}

export default Component;
