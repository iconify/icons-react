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

.p0df1zbcw {
  stroke-opacity: 0.4;
  d: path("M2 11L20 11L20 2L2 2L2 20L11 20L11 2");
}

.ypxhweb_v {
  d: path("M15.7055 19.2971L18.3333 22L22.1467 15.76");
}
</style><g class="gp_8x1bzb"><path class="p0df1zbcw"/><path class="ypxhweb_v"/></g>`,
		"fallback": "keyline-icons:grid-2x2-check-sharp-duotone",
	});
}

export default Component;
