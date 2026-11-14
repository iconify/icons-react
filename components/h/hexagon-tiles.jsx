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
		"content": `<style>.ag6fk_5vu {
  d: path("m8.511 10.947l2.75 1.618A1.5 1.5 0 0 1 12 13.858v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.dqawodb8q {
  d: path("m17.011 10.947l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618A1.5 1.5 0 0 1 12 17.142v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjva-1bff {
  d: path("m12.761 3.447l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293V6.358a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}
</style><g class="hntgybcog"><path class="jjva-1bff"/><path class="ag6fk_5vu"/><path class="dqawodb8q"/></g>`,
		"fallback": "uix:hexagon-tiles",
	});
}

export default Component;
