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

.gpiqd5sil {
  fill: currentColor;
  d: path("M8 7L22 7C22.5523 7 23 7.4477 23 8L23 22C23 22.5523 22.5523 23 22 23L8 23C7.4477 23 7 22.5523 7 22L7 8C7 7.4477 7.4477 7 8 7Z");
  stroke: none;
}

.kytdc0isv {
  d: path("M15.8284 5L15.8284 2L2 2L2 15.8284L5 15.8284");
}
</style><g class="gp_8x1bzb"><path class="kytdc0isv"/><path class="gpiqd5sil"/></g>`,
		"fallback": "keyline-icons:copy-sharp-fill",
	});
}

export default Component;
