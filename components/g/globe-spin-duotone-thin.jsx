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
		"content": `<style>.be83lpb1j {
  fill: currentColor;
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ei_3wdi5i {
  d: path("M12 20a8 8 0 0 1 0 -16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrlkc9bnf {
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.ymfnpaceh {
  d: path("m12 2 2.5 2.5L12 7");
}
</style><g class="hntgybcog"><path class="be83lpb1j"/><path class="nrlkc9bnf"/><path class="ei_3wdi5i"/><path class="ymfnpaceh"/></g>`,
		"fallback": "iconmind:globe-spin-duotone-thin",
	});
}

export default Component;
