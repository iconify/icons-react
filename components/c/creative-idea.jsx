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
		"content": `<style>.d9sf4hbas {
  d: path("M9 17.75v-1.5c-2.5-1.5-4-4-4-6.5a7 7 0 0 1 14 0c0 2.5-1.5 5-4 6.5v1.5ZM9.5 21h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yr7yb-bwk {
  d: path("m12.442 8.058l.204.49a1.5 1.5 0 0 0 .806.806l.49.204a.479.479 0 0 1 0 .884l-.49.204a1.5 1.5 0 0 0-.806.806l-.204.49a.479.479 0 0 1-.884 0l-.204-.49a1.5 1.5 0 0 0-.806-.806l-.49-.204a.479.479 0 0 1 0-.884l.49-.204a1.5 1.5 0 0 0 .806-.806l.204-.49a.479.479 0 0 1 .884 0");
}
</style><g class="hntgybcog"><path class="d9sf4hbas"/><path class="yr7yb-bwk"/></g>`,
		"fallback": "uix:creative-idea",
	});
}

export default Component;
