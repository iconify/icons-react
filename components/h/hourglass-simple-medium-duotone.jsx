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

.wtbm_gnoi {
  d: path("M178.13 80L128 128L77.87 80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wv4026bfl {
  d: path("M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M97.79 88h60.42L128 116.92ZM200 48l-25.08 24H81.08L56 48ZM56 208l64-61.26V168a8 8 0 0 0 16 0v-21.26L200 208Z");
}
</style><g class="cuyn6tgcc"><path class="wtbm_gnoi"/><path class="wv4026bfl"/></g>`,
		"fallback": "ph:hourglass-simple-medium-duotone",
	});
}

export default Component;
