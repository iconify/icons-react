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
		"content": `<style>.duuhr1boc {
  fill: currentColor;
  d: path("M6 2C8.0711 2 10 3.9289 10 6C10 8.0711 8.0711 10 6 10C3.9289 10 2 8.0711 2 6C2 3.9289 3.9289 2 6 2Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hl2lbguno {
  d: path("M6 22L6 8M18 13L18 6L12 6M18.5 15L18.5 22M15 18.5L22 18.5");
}
</style><g class="gp_8x1bzb"><path class="hl2lbguno"/><path class="duuhr1boc"/></g>`,
		"fallback": "keyline-icons:git-pull-request-create-sharp-fill",
	});
}

export default Component;
