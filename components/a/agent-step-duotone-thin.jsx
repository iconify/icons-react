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
		"content": `<style>.dxqp15kpa {
  d: path("M8.69 8.37a4 4 0 1 1 -3.38 0");
}

.gl_c0p6sd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.69 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klyrig6if {
  d: path("m14 7 5 5 -5 5");
}

.z42xzcoix {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m14 7 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gl_c0p6sd"/><path class="z42xzcoix"/><path class="dxqp15kpa"/><path class="klyrig6if"/></g>`,
		"fallback": "iconmind:agent-step-duotone-thin",
	});
}

export default Component;
