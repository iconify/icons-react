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
		"content": `<style>.bc4f2qb7p {
  d: path("M3 7.5L5 4h14l2 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogi_4zbfm {
  d: path("M5.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.uni83db1j {
  d: path("M6.434 7.5h11.132a1.75 1.75 0 0 1 1.742 1.924l-.65 6.5a1.75 1.75 0 0 1-1.742 1.576H7.084a1.75 1.75 0 0 1-1.742-1.576l-.65-6.5A1.75 1.75 0 0 1 6.434 7.5");
}
</style><g class="hntgybcog"><path class="bc4f2qb7p"/><path class="uni83db1j"/><path class="ogi_4zbfm"/></g>`,
		"fallback": "uix:communal-bin",
	});
}

export default Component;
