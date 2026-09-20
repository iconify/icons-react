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
		"content": `<style>.cejwj-bns {
  d: path("M10 20h10V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k46pmtl2a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.po51cnplk {
  d: path("m4 4 16 16");
}

.w1rs6qnox {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 20h10V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="k46pmtl2a"/><path class="w1rs6qnox"/><path class="po51cnplk"/><path class="cejwj-bns"/></g>`,
		"fallback": "iconmind:arrow-down-right-duotone-thin",
	});
}

export default Component;
