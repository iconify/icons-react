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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr2do8b4e {
  d: path("M4.5 10.5a7.5 7.5 0 0 1 15 0m-15 0za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2");
}

.z0entdbcr {
  d: path("M8.75 7.25a4.75 4.75 0 0 1 6.5 0M12 5.75V21m-4.5 0h9");
}
</style><g class="hntgybcog"><path class="wr2do8b4e"/><path class="z0entdbcr"/></g>`,
		"fallback": "uix:headset-stand",
	});
}

export default Component;
