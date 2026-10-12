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
		"content": `<style>.kf4bnmbrc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.75h3.5l2.75-8l5.5 15l2.75-7");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vsx74xk5w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.5 12.75h.01");
}
</style><g class="ux2u0rbkq"><path class="kf4bnmbrc"/><path class="vsx74xk5w"/></g>`,
		"fallback": "iconoven:activity-sharp",
	});
}

export default Component;
