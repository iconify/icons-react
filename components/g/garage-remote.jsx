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
		"content": `<style>.hisr-d3nd {
  d: path("M6.75 21.25v-8.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v8.5M8.75 15h6.5m-6.5 3.25h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nhfx1zb1g {
  d: path("M2.75 9L12 3.25L21.25 9v10.25a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="nhfx1zb1g"/><path class="hisr-d3nd"/></g>`,
		"fallback": "iconoven:garage-remote",
	});
}

export default Component;
