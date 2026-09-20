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

.i0qjstj5a {
  fill: currentColor;
  d: path("M9 5.5h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mn7fuybck {
  d: path("M9 5.5h3l3 3 -3 3H9Z");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}
</style><g class="hntgybcog"><path class="m8c8atiya"/><path class="i0qjstj5a"/><path class="n0n63pb2v"/><path class="mn7fuybck"/></g>`,
		"fallback": "iconmind:entity-memory-duotone-thin",
	});
}

export default Component;
