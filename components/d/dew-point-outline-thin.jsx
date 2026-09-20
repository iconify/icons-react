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

.j9mpubb9t {
  d: path("m12 6 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.l0q87g1mm {
  d: path("M20 14a8 8 0 0 1 -16 0");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="j9mpubb9t"/><path class="l0q87g1mm"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:dew-point-outline-thin",
	});
}

export default Component;
