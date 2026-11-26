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
		"content": `<style>.ejf9s19ur {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 8L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 8Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vd-5lt4cc {
  d: path("M3 3L21 3L21 21L3 21ZM3 8L21 8M6.5 8L8.5 3M11 8L13 3M15.5 8L17.5 3");
}
</style><g class="gp_8x1bzb"><path class="ejf9s19ur"/><path class="vd-5lt4cc"/></g>`,
		"fallback": "keyline-icons:clapperboard-sharp-two-tone",
	});
}

export default Component;
