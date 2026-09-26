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

.rc9k93_4z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21.61 9.21C21.86 9.4 22 9.69 22 10V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V10C2 9.69 2.14 9.4 2.39 9.21L11.39 2.21C11.75 1.93 12.25 1.93 12.61 2.21L21.61 9.21Z");
  stroke: none;
}

.uly0edb1d {
  d: path("M9 22L9 14L15 14L15 22");
}
</style><g class="gp_8x1bzb"><path class="rc9k93_4z"/><path class="uly0edb1d"/></g>`,
		"fallback": "keyline-icons:home-sharp-duotone",
	});
}

export default Component;
