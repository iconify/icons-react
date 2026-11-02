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
		"content": `<style>.l6fn63b_q {
  d: path("M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Zm0 3h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wui7iacqj {
  stroke-opacity: 0.4;
  d: path("M15 6v1m0 7v3");
}
</style><g class="nrj6p8qat"><path class="wui7iacqj"/><path class="l6fn63b_q"/></g>`,
		"fallback": "coolicons:fridge-duocolor-round",
	});
}

export default Component;
