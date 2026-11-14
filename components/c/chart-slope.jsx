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

.nb_k11bsu {
  fill: currentColor;
  d: path("M2.75 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m16-2.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-16 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m16 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-16 1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m16 2.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.sj_rcrb6c {
  d: path("M4 2.5v19m16-19v19M4 6l16-2.5M4 12l16 5M4 18l16 2.5");
}
</style><g class="hntgybcog"><path class="sj_rcrb6c"/><path class="nb_k11bsu"/></g>`,
		"fallback": "uix:chart-slope",
	});
}

export default Component;
