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

.ljxxalrwi {
  d: path("M10.5 8a2 2 0 1 1 3 0a2 2 0 1 1 0 3a2 2 0 1 1-3 0a2 2 0 1 1 0-3M12 9.5h.01");
}

.x6xflxbep {
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v8.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 13.875v-8.75A2.625 2.625 0 0 1 5.125 2.5M6 16.5v5m12-5v5");
}
</style><g class="hntgybcog"><path class="x6xflxbep"/><path class="ljxxalrwi"/></g>`,
		"fallback": "uix:backdrop-flower-wall",
	});
}

export default Component;
