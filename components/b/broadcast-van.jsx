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
		"content": `<style>.d0knv-bpu {
  d: path("M2.5 17.5v-6A1.5 1.5 0 0 1 4 10h10.5l7 4v3.5Z");
}

.euvqucbva {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4.5 3.5a3.75 3.75 0 0 0 7.5 0Zm3.75 3.75V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d0knv-bpu"/><path class="euvqucbva"/></g>`,
		"fallback": "uix:broadcast-van",
	});
}

export default Component;
