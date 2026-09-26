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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.h0myn7b2q {
  d: path("M6 16L6 2M18 14L18 22M14 18L22 18M18 12L18 8M8 18L12 18");
}

.hudd1fzvs {
  fill: currentColor;
  d: path("M6 14C8.0711 14 10 15.9289 10 18C10 20.0711 8.0711 22 6 22C3.9289 22 2 20.0711 2 18C2 15.9289 3.9289 14 6 14ZM18 2C20.0711 2 22 3.9289 22 6C22 8.0711 20.0711 10 18 10C15.9289 10 14 8.0711 14 6C14 3.9289 15.9289 2 18 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="h0myn7b2q"/><path class="hudd1fzvs"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-sharp-fill",
	});
}

export default Component;
