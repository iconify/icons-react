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

.gx_rsjonv {
  d: path("M12 3.0001L2.002 21L21.998 21Z");
}

.pvr0zy2jy {
  stroke-opacity: 0.4;
  d: path("M12 3L12 14M3.0104 19.1834L12 14L20.9896 19.1834");
}
</style><g class="gp_8x1bzb"><path class="pvr0zy2jy"/><path class="gx_rsjonv"/></g>`,
		"fallback": "keyline-icons:dice-d4-sharp-duotone",
	});
}

export default Component;
