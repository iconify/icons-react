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
		"content": `<style>.ey4kxpwmp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.17 3.67L6.337 6.5L9.17 9.33m5.66-5.66l2.833 2.83l-2.833 2.83");
}

.m-j6pf-uw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.25L12 10l4 11.25m-6.4-4.5h4.8");
}

.q_jb7mhbr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="m-j6pf-uw"/><path class="q_jb7mhbr"/><path class="ey4kxpwmp"/></g>`,
		"fallback": "iconoven:broadcast-tower-sharp",
	});
}

export default Component;
