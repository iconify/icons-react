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
		"content": `<style>.aw-wpqbei {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M3 9h18");
}

.dvn7ikb3x {
  d: path("M5.25 9h5.25v1a2.5 2.5 0 0 1-5.25 0Zm8.25 0h5.25v1a2.5 2.5 0 0 1-5.25 0Zm-5 5.5c1 1.5 2.1 2.25 3.5 2.25s2.5-.75 3.5-2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aw-wpqbei"/><path class="dvn7ikb3x"/></g>`,
		"fallback": "uix:emoji-cool",
	});
}

export default Component;
