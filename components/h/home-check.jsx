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
		"content": `<style>.cwdj-58kz {
  d: path("m9 14.5l2 2l4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxrshwbpq {
  d: path("m5.195 9.454l4.5-3.937a3.5 3.5 0 0 1 4.61 0l4.5 3.937A3.5 3.5 0 0 1 20 12.088V16.5a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-4.412a3.5 3.5 0 0 1 1.195-2.634");
}
</style><g class="hntgybcog"><path class="hxrshwbpq"/><path class="cwdj-58kz"/></g>`,
		"fallback": "uix:home-check",
	});
}

export default Component;
