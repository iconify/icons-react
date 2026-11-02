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
		"content": `<style>.fbhc8jzlr {
  d: path("M21 17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkn535btd {
  stroke-opacity: 0.4;
  d: path("m15 15l3-3l-3-3m3 3H8");
}
</style><g class="nrj6p8qat"><path class="tkn535btd"/><path class="fbhc8jzlr"/></g>`,
		"fallback": "coolicons:exit-duocolor-round",
	});
}

export default Component;
