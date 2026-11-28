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
		"content": `<style>.a-ycqcykh {
  d: path("M21 18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oyqa3q7mq {
  stroke-opacity: 0.4;
  d: path("M3 6C3 4.34315 4.34315 3 6 3M10.5 3H13.5M18 3C19.6569 3 21 4.34315 21 6M21 10.5V13.5M3 13.5V10.5");
}
</style><g class="nrj6p8qat"><path class="oyqa3q7mq"/><path class="a-ycqcykh"/></g>`,
		"fallback": "keyline-icons:border-bottom-two-tone",
	});
}

export default Component;
