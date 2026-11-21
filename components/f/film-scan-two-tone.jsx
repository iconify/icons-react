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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s94671bsv {
  d: path("M13 3H6C4.3431 3 3 4.3431 3 6V18C3 19.6569 4.3431 21 6 21H13M8 3V21M3 12H13M3 7.5H8M3 16.5H8M13 2V22M17 3V10M17 21V14M21 20V18M21 14V10M21 6V4");
}

.wxd8jjbno {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 12V21C14 21.5523 13.5523 22 13 22H6C3.7909 22 2 20.2091 2 18V6C2 3.7909 3.7909 2 6 2H13C13.5523 2 14 2.4477 14 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wxd8jjbno"/><path class="s94671bsv"/></g>`,
		"fallback": "keyline-icons:film-scan-two-tone",
	});
}

export default Component;
