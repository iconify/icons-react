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
		"content": `<style>.dcyvmcc9k {
  d: path("M5.5 9H9l3 -3h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.p0sfg44ej {
  d: path("m9 9 3 3h4.5");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="dcyvmcc9k"/><path class="p0sfg44ej"/></g>`,
		"fallback": "iconmind:context-router-outline-thin",
	});
}

export default Component;
