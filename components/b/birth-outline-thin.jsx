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
		"content": `<style>.e6h0tjbiq {
  d: path("M8 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0q87g1mm {
  d: path("M20 14a8 8 0 0 1 -16 0");
}
</style><g class="hntgybcog"><path class="l0q87g1mm"/><path class="e6h0tjbiq"/></g>`,
		"fallback": "iconmind:birth-outline-thin",
	});
}

export default Component;
