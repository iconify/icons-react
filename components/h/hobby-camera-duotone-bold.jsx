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
		"content": `<style>.cns1wqbaj {
  fill: currentColor;
  d: path("M3 8v11h18V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d-h9flbfj {
  fill: currentColor;
  d: path("M17 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iltwr9b-o {
  d: path("M8 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.jl4j86b7j {
  d: path("m8 8 3 -3h3l3 3");
}

.qwvsr5bod {
  fill: currentColor;
  d: path("M8 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vjzgivlgt {
  d: path("M3 8v11h18V8Z");
}

.y9mk1r17g {
  d: path("M17 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="cns1wqbaj"/><path class="qwvsr5bod"/><path class="d-h9flbfj"/><path class="vjzgivlgt"/><path class="jl4j86b7j"/><path class="iltwr9b-o"/><path class="y9mk1r17g"/></g>`,
		"fallback": "iconmind:hobby-camera-duotone-bold",
	});
}

export default Component;
