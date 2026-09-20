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
		"content": `<style>.d3t8z9b-e {
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k3hxzxbpv {
  fill: currentColor;
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lvg3yfbgk {
  d: path("M3 18a3 3 0 0 1 0 -6h18a3 3 0 0 1 0 6Z");
}

.nb2b_dbii {
  fill: currentColor;
  d: path("M3 18a3 3 0 0 1 0 -6h18a3 3 0 0 1 0 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="nb2b_dbii"/><path class="k3hxzxbpv"/><path class="lvg3yfbgk"/><path class="d3t8z9b-e"/></g>`,
		"fallback": "iconmind:bedtime-duotone-thin",
	});
}

export default Component;
