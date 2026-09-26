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

.lzj92chim {
  d: path("M6 22L6 9M13.1465 6L18 6L18 12M15.0858 3.7071L12.7929 6L15.0858 8.2929");
}

.tvudebc2k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2C8.0711 2 10 3.9289 10 6C10 8.0711 8.0711 10 6 10C3.9289 10 2 8.0711 2 6C2 3.9289 3.9289 2 6 2ZM18 14C15.9289 14 14 15.9289 14 18C14 20.0711 15.9289 22 18 22C20.0711 22 22 20.0711 22 18C22 15.9289 20.0711 14 18 14Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="lzj92chim"/></g>`,
		"fallback": "keyline-icons:git-return-sharp-duotone",
	});
}

export default Component;
