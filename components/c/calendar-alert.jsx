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
		"content": `<style>.jhz36gmwp {
  fill: currentColor;
  d: path("M18 20C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21C17 20.4477 17.4477 20 18 20Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yjpdgg_2c {
  d: path("M11 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V11M7 11H17M8 3V7M16 3V7M18 15V17");
}
</style><g class="nrj6p8qat"><path class="yjpdgg_2c"/><path class="jhz36gmwp"/></g>`,
		"fallback": "keyline-icons:calendar-alert",
	});
}

export default Component;
