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
		"content": `<style>.mtohnxbsi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xlusco2lt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v11.5H2.75zM6.25 12h6");
}
</style><g class="ux2u0rbkq"><path class="xlusco2lt"/><path class="mtohnxbsi"/></g>`,
		"fallback": "iconoven:hard-drive-check-sharp",
	});
}

export default Component;
