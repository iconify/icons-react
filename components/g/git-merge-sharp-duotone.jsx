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

.mueb7hbap {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 22C8.0711 22 10 20.0711 10 18C10 15.9289 8.0711 14 6 14C3.9289 14 2 15.9289 2 18C2 20.0711 3.9289 22 6 22ZM18 10C20.0711 10 22 8.0711 22 6C22 3.9289 20.0711 2 18 2C15.9289 2 14 3.9289 14 6C14 8.0711 15.9289 10 18 10Z");
  stroke: none;
}

.q9r5-x3bu {
  d: path("M6 2L6 15C6.1667 12 8.2 6 15 6");
}
</style><g class="gp_8x1bzb"><path class="mueb7hbap"/><path class="q9r5-x3bu"/></g>`,
		"fallback": "keyline-icons:git-merge-sharp-duotone",
	});
}

export default Component;
