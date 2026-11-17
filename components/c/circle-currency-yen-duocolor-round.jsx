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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.vsabs2b-e {
  stroke-opacity: 0.4;
  d: path("m9 7l3 3l3-3m-3 3v7m-3-5h6m-6 4h6");
}
</style><g class="nrj6p8qat"><path class="vsabs2b-e"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:circle-currency-yen-duocolor-round",
	});
}

export default Component;
