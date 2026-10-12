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
		"content": `<style>.a6utnbb0u {
  d: path("M12 5.5c1.75 1.5 2.5 4 2.5 7.25v4.75a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4.75C9.5 9.5 10.25 7 12 5.5");
}

.dhs0bwbau {
  d: path("M2.75 3.25v16a2 2 0 0 0 2 2h14.5a2 2 0 0 0 2-2v-16M2.75 7.5h3m15.5 0h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dhs0bwbau"/><path class="a6utnbb0u"/></g>`,
		"fallback": "iconoven:harbor-dock",
	});
}

export default Component;
