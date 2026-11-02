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

.ntyt7mipc {
  d: path("M9 17H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10M7 7h10M7 11h2");
}

.tlhce0b5x {
  stroke-opacity: 0.4;
  d: path("M13 15a2.828 2.828 0 1 1 4-4a2.828 2.828 0 0 1-4 4m0 0v6l2-2l2 2v-6");
}
</style><g class="nrj6p8qat"><path class="tlhce0b5x"/><path class="ntyt7mipc"/></g>`,
		"fallback": "coolicons:certificate-duocolor-round",
	});
}

export default Component;
