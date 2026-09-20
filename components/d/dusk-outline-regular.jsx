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
		"content": `<style>.bnhdslb0j {
  d: path("M19 8v6");
}

.k15q4tbdt {
  d: path("M6 19a6 6 0 0 1 12 0");
}

.kyf663bil {
  d: path("M16.5 11.5 19 14l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="k15q4tbdt"/><path class="z9ittvbis"/><path class="bnhdslb0j"/><path class="kyf663bil"/></g>`,
		"fallback": "iconmind:dusk-outline-regular",
	});
}

export default Component;
