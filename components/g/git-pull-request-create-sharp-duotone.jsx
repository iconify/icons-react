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
		"content": `<style>.a0ft1nbgd {
  d: path("M6 22L6 9M18 13L18 6L12 6M18.5 15L18.5 22M15 18.5L22 18.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u_vjevdkc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2C8.0711 2 10 3.9289 10 6C10 8.0711 8.0711 10 6 10C3.9289 10 2 8.0711 2 6C2 3.9289 3.9289 2 6 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="u_vjevdkc"/><path class="a0ft1nbgd"/></g>`,
		"fallback": "keyline-icons:git-pull-request-create-sharp-duotone",
	});
}

export default Component;
