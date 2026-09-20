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
		"content": `<style>.jcxg2bbvb {
  d: path("M2 12h8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.kaj4_cbkd {
  d: path("m6 8 4 4 -4 4");
}

.kes5k2fvf {
  d: path("m18 8 -4 4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jcxg2bbvb"/><path class="kaj4_cbkd"/><path class="jlfl_ccwj"/><path class="kes5k2fvf"/></g>`,
		"fallback": "iconmind:contradiction-outline-regular",
	});
}

export default Component;
