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
		"content": `<style>.b1egz1dwh {
  d: path("M7 15a4 4 0 1 1 0-8c2-6 11-5 11 2a3 3 0 0 1 0 6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tqg9wsb5k {
  stroke-opacity: 0.4;
  d: path("M8 18v3m4-3v3m4-3v3");
}
</style><g class="nrj6p8qat"><path class="tqg9wsb5k"/><path class="b1egz1dwh"/></g>`,
		"fallback": "coolicons:cloud-rain-duocolor-round",
	});
}

export default Component;
