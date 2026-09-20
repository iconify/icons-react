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

.trwbfabax {
  d: path("M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-72 68.92L56 48ZM56 208l72-68.92L200 208Z");
}

.uw69ldbrz {
  d: path("M205.64 53.66L128 128L50.36 53.66A8 8 0 0 1 56 40h144a8 8 0 0 1 5.64 13.66M128 128l-77.64 74.34A8 8 0 0 0 56 216h144a8 8 0 0 0 5.66-13.66Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="uw69ldbrz"/><path class="trwbfabax"/></g>`,
		"fallback": "ph:hourglass-simple-duotone",
	});
}

export default Component;
