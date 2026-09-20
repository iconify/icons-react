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
		"content": `<style>.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k5f0ncbhf {
  d: path("m14.5 9.5 -5 5");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="hntgybcog"><path class="ppivcbbzp"/><path class="t3rq50btb"/><path class="flq2w3bwj"/><path class="k5f0ncbhf"/></g>`,
		"fallback": "iconmind:feature-cross-outline-thin",
	});
}

export default Component;
