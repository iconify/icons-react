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
		"content": `<style>.di4dnkbvr {
  d: path("M8 19c1.5 -2 6.5 -2 8 0");
}

.drv76mblh {
  fill: currentColor;
  d: path("M6 3h12c0 4 -5 6 -5 9s5 5 5 9H6c0 -4 5 -6 5 -9S6 7 6 3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rl--ddclc {
  d: path("M6 3h12c0 4 -5 6 -5 9s5 5 5 9H6c0 -4 5 -6 5 -9S6 7 6 3");
}
</style><g class="hntgybcog"><path class="drv76mblh"/><path class="rl--ddclc"/><path class="di4dnkbvr"/></g>`,
		"fallback": "iconmind:event-countdown-duotone-thin",
	});
}

export default Component;
