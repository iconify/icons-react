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

.i48m5jb6a {
  d: path("M4.5 5.5h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4.75l-1.5-2.75h-2.5l-1.5 2.75H4.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2");
}

.skwpi6bll {
  d: path("M5.25 11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="i48m5jb6a"/><path class="skwpi6bll"/></g>`,
		"fallback": "uix:cardboard-viewer",
	});
}

export default Component;
