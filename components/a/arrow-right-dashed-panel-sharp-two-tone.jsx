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

.kk2ahrb3x {
  stroke-opacity: 0.4;
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M21 8L21 3.0001L17 3M8 21L3 21L3 17M3 9.5L3 14.5");
}

.yjww-7shn {
  d: path("M9 15.5L20.5249 15.5M14.6906 9.7045L20.7601 15.5L14.7102 21.2768");
}
</style><g class="gp_8x1bzb"><path class="kk2ahrb3x"/><path class="yjww-7shn"/></g>`,
		"fallback": "keyline-icons:arrow-right-dashed-panel-sharp-two-tone",
	});
}

export default Component;
