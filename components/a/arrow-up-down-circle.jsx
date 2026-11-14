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

.m54gfvbxr {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 6.5v11");
}

.nj6q_jb9z {
  d: path("M14.5 9L12 6.5L9.5 9m5 6L12 17.5L9.5 15");
}
</style><g class="hntgybcog"><path class="m54gfvbxr"/><path class="nj6q_jb9z"/></g>`,
		"fallback": "uix:arrow-up-down-circle",
	});
}

export default Component;
