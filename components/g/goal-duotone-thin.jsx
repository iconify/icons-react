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

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qxdssbcxh {
  d: path("M14.32 7a5.5 5.5 0 1 1 -4.64 0");
}

.tqjj49-wk {
  fill: currentColor;
  d: path("M14.32 7a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xa771-t-o"/><path class="tqjj49-wk"/><path class="k_2z93bzc"/><path class="ugdbidcqi"/><path class="qxdssbcxh"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:goal-duotone-thin",
	});
}

export default Component;
