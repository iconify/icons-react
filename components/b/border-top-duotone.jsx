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
		"content": `<style>.iecvojwip {
  stroke-opacity: 0.4;
  d: path("M21 10.5V13.5M21 18C21 19.6569 19.6569 21 18 21M13.5 21H10.5M6 21C4.34315 21 3 19.6569 3 18M3 13.5V10.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0mp58bjw {
  d: path("M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6");
}
</style><g class="nrj6p8qat"><path class="iecvojwip"/><path class="r0mp58bjw"/></g>`,
		"fallback": "keyline-icons:border-top-duotone",
	});
}

export default Component;
