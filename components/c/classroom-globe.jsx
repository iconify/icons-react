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
		"content": `<style>.e7sm49beq {
  d: path("M9.25 9.5a2.75 6.5 0 1 0 5.5 0a2.75 6.5 0 1 0-5.5 0m-3.75 0h13M12 16v3m-4 2.5h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r7bsc7b6t {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="r7bsc7b6t"/><path class="e7sm49beq"/></g>`,
		"fallback": "uix:classroom-globe",
	});
}

export default Component;
