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

.u_vjevdkc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2C8.0711 2 10 3.9289 10 6C10 8.0711 8.0711 10 6 10C3.9289 10 2 8.0711 2 6C2 3.9289 3.9289 2 6 2Z");
  stroke: none;
}

.zsrqem2_b {
  d: path("M6 22L6 9M18 13.5L18 6L12 6M15.7071 15.7071L21.2929 21.2929M21.2929 15.7071L15.7071 21.2929");
}
</style><g class="gp_8x1bzb"><path class="u_vjevdkc"/><path class="zsrqem2_b"/></g>`,
		"fallback": "keyline-icons:git-x-sharp-duotone",
	});
}

export default Component;
