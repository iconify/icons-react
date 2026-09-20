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
		"content": `<style>.bixrf0b_t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bzecsub_a {
  d: path("M8 12h12");
}

.c_pe6njtz {
  d: path("M4 7v10");
}

.fgcgcycrv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hkglpchld {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ipr9vreed {
  d: path("m12 8 -4 4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hkglpchld"/><path class="bixrf0b_t"/><path class="fgcgcycrv"/><path class="c_pe6njtz"/><path class="bzecsub_a"/><path class="ipr9vreed"/></g>`,
		"fallback": "iconmind:arrow-left-to-line-duotone-regular",
	});
}

export default Component;
