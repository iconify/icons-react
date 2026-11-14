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

.ldj_x1b8e {
  d: path("M9.75 10.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 13v4");
}

.mddc0qjct {
  d: path("M9 17c0-2.5-3-4-3-8.5a6 6 0 0 1 12 0c0 4.5-3 6-3 8.5v2.5a3 2 0 0 1-6 0Zm0 0h6");
}
</style><g class="hntgybcog"><path class="mddc0qjct"/><path class="ldj_x1b8e"/></g>`,
		"fallback": "uix:element-argon",
	});
}

export default Component;
