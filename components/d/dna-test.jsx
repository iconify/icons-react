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
		"content": `<style>.es8f7jbsw {
  d: path("M5 3c0 4.5 6 4.5 6 9s-6 4.5-6 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rseep8b2h {
  d: path("M11 3c0 4.5-6 4.5-6 9s6 4.5 6 9m4-2.5l2 2l4.5-4.5");
}
</style><g class="hntgybcog"><path class="es8f7jbsw"/><path class="rseep8b2h"/></g>`,
		"fallback": "uix:dna-test",
	});
}

export default Component;
