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

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.n6komnwll {
  d: path("M6 7a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="n6komnwll"/></g>`,
		"fallback": "iconmind:fixture-data-outline-thin",
	});
}

export default Component;
