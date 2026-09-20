import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.riuqvob8r {
  d: path("M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M158.21 168H97.79L128 139.08ZM200 48l-72 68.92L56 48ZM56 208l25.06-24h93.84l25.1 24Z");
}

.xdfuqqb_m {
  d: path("M200 216H56a8 8 0 0 1-5.66-13.66L77.87 176h100.26l27.51 26.34A8 8 0 0 1 200 216");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xdfuqqb_m"/><path class="riuqvob8r"/></g>`,
		"fallback": "ph:hourglass-simple-low-duotone",
	});
}

export default Component;
