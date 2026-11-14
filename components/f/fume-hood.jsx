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
		"content": `<style>.bd59vd4by {
  d: path("M8.25 10.5h7.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 15.75 16h-7.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75M3.5 18.75h17M12 7.5v-5M9.75 4.75L12 2.5l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ocram3b5e {
  d: path("M7 7.5h10a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-7A3.5 3.5 0 0 1 7 7.5");
}
</style><g class="hntgybcog"><path class="ocram3b5e"/><path class="bd59vd4by"/></g>`,
		"fallback": "uix:fume-hood",
	});
}

export default Component;
