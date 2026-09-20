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
		"content": `<style>.cnbtu0ttq {
  fill: currentColor;
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myf7-9gbi {
  d: path("m19 19 -3 3");
}

.nn04ptkrq {
  d: path("m16 19 3 3");
}

.sk-a6mb_r {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.t-ce5gbrd {
  d: path("m6 7 6 6 6 -6");
}
</style><g class="hntgybcog"><path class="cnbtu0ttq"/><path class="sk-a6mb_r"/><path class="t-ce5gbrd"/><path class="nn04ptkrq"/><path class="myf7-9gbi"/></g>`,
		"fallback": "iconmind:dead-letter-cloud-duotone-thin",
	});
}

export default Component;
