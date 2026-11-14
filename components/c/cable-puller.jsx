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
		"content": `<style>.ext23b30v {
  d: path("M9.5 2.5H19V17a2.5 2.5 0 0 1-5 0v-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zszj7qesl {
  d: path("M7.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.ztu8sy_fn {
  d: path("M4 8a5.5 5.5 0 1 0 11 0A5.5 5.5 0 1 0 4 8");
}
</style><g class="hntgybcog"><path class="ztu8sy_fn"/><path class="ext23b30v"/><path class="zszj7qesl"/></g>`,
		"fallback": "uix:cable-puller",
	});
}

export default Component;
