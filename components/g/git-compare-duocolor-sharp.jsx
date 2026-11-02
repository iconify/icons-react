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
		"content": `<style>.faw_rxanl {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w52u0skdd {
  stroke-opacity: 0.4;
  d: path("M19 16V6h-8m3-3l-3 3l3 3M5 8v10h8m-3-3l3 3l-3 3");
}
</style><g class="nrj6p8qat"><path class="w52u0skdd"/><path class="faw_rxanl"/></g>`,
		"fallback": "coolicons:git-compare-duocolor-sharp",
	});
}

export default Component;
