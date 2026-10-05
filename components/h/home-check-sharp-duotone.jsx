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

.r936wd-yw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 11L21 22C21 22.55 20.55 23 20 23L2 23C1.45 23 1 22.55 1 22L1 11C1 10.69 1.14 10.4 1.39 10.21L10.39 3.21C10.75 2.93 11.25 2.93 11.61 3.21L13 4.2856L13 11L21 11Z");
  stroke: none;
}

.t_1k05bgc {
  d: path("M8 23L8 15L14 15L14 23M15.7055 5.2971L18.3333 8L22.1371 1.5054");
}
</style><g class="gp_8x1bzb"><path class="r936wd-yw"/><path class="t_1k05bgc"/></g>`,
		"fallback": "keyline-icons:home-check-sharp-duotone",
	});
}

export default Component;
