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
		"content": `<style>.a0ceqbbgy {
  stroke-opacity: 0.4;
  d: path("M19 16v-6a4 4 0 0 0-4-4h-4m3-3l-3 3l3 3M5 8v6a4 4 0 0 0 4 4h4m-3-3l3 3l-3 3");
}

.faw_rxanl {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a0ceqbbgy"/><path class="faw_rxanl"/></g>`,
		"fallback": "coolicons:git-compare-duocolor-round",
	});
}

export default Component;
