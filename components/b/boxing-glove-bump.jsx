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

.rwive3bqu {
  d: path("M5.5 6.5h3c2 0 3.5 1.75 3.5 4v3c0 2.25-1.5 4-3.5 4h-3ZM4 8za1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 4 16a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 4 8m14.5-1.5h-3c-2 0-3.5 1.75-3.5 4v3c0 2.25 1.5 4 3.5 4h3ZM20 8za1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 20 16a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 20 8");
}

.wr648emuv {
  d: path("M5.5 11h2a2 2 0 0 1 2 2m9-2h-2a2 2 0 0 0-2 2");
}
</style><g class="hntgybcog"><path class="rwive3bqu"/><path class="wr648emuv"/></g>`,
		"fallback": "uix:boxing-glove-bump",
	});
}

export default Component;
