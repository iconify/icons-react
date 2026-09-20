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
		"content": `<style>.bazq81bsf {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.gte-olbep {
  d: path("M10 8v3.5");
}

.hceeinb8d {
  fill: currentColor;
  d: path("M8 14a2.5 2.5 0 0 1 2.5 -2.5h3A2.5 2.5 0 0 1 16 14a2.5 2.5 0 0 1 -2.5 2.5h-3A2.5 2.5 0 0 1 8 14");
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

.jz3tcofhe {
  d: path("M14 8v3.5");
}

.znz1wcbkt {
  d: path("M8 14a2.5 2.5 0 0 1 2.5 -2.5h3A2.5 2.5 0 0 1 16 14a2.5 2.5 0 0 1 -2.5 2.5h-3A2.5 2.5 0 0 1 8 14");
}
</style><g class="hntgybcog"><path class="bazq81bsf"/><path class="hceeinb8d"/><path class="d3xn50bni"/><path class="znz1wcbkt"/><path class="gte-olbep"/><path class="jz3tcofhe"/></g>`,
		"fallback": "iconmind:capability-card-duotone-thin",
	});
}

export default Component;
