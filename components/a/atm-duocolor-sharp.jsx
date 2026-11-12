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
		"content": `<style>.ezwbh-sld {
  d: path("M3 17V3h18v14M7 6h10M3 10h4m10 0h4");
}

.mb__tbjmc {
  stroke-opacity: 0.4;
  d: path("M7 10h10v11H7zm3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mb__tbjmc"/><path class="ezwbh-sld"/></g>`,
		"fallback": "coolicons:atm-duocolor-sharp",
	});
}

export default Component;
