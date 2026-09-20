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
		"content": `<style>.bc503ub0k {
  fill: currentColor;
  d: path("M7 9v11h9V9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c8h3t-z9z {
  d: path("M7 9v11h9V9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jbmfbdcwk {
  d: path("M4 21 20 5");
}

.y80g12bwz {
  d: path("m7 9 4.5 -4.5L16 9");
}
</style><g class="hntgybcog"><path class="bc503ub0k"/><path class="c8h3t-z9z"/><path class="y80g12bwz"/><path class="jbmfbdcwk"/></g>`,
		"fallback": "iconmind:dairy-free-duotone-thin",
	});
}

export default Component;
