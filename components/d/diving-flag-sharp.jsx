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
		"content": `<style>.bzlemrbpp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4.75 4l15 10.5");
}

.h0aclnbif {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.5h16V15h-16Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zjt_73beb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 21.25V2.75");
}
</style><g class="ux2u0rbkq"><path class="h0aclnbif"/><path class="bzlemrbpp"/><path class="zjt_73beb"/></g>`,
		"fallback": "iconoven:diving-flag-sharp",
	});
}

export default Component;
