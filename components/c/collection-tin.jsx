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
		"content": `<style>.bro5_6b5x {
  d: path("M6 11.5v8a6 2.25 0 0 0 12 0v-8m-7.5 0h3M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.f3wyxtb6z {
  d: path("M6 11.5a6 2.75 0 1 0 12 0a6 2.75 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f3wyxtb6z"/><path class="bro5_6b5x"/></g>`,
		"fallback": "uix:collection-tin",
	});
}

export default Component;
