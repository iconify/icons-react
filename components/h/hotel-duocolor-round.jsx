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

.qkaecqabr {
  d: path("M3 21h18M5 21V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14M8 7h.01M8 11h.01M12 7h.01M12 11h.01M16 7h.01M16 11h.01");
}

.ru57a09hd {
  stroke-opacity: 0.4;
  d: path("M9 16h6m-5 5v-5m4 5v-5");
}
</style><g class="nrj6p8qat"><path class="ru57a09hd"/><path class="qkaecqabr"/></g>`,
		"fallback": "coolicons:hotel-duocolor-round",
	});
}

export default Component;
