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
		"content": `<style>.jvayet_ht {
  stroke-opacity: 0.4;
  d: path("M16 3v2M2 2l20 20");
}

.mp-l3bbdv {
  d: path("M19 19c-.723 1.037-1.64 2-3 2H8a4 4 0 0 1-4-4V9c0-1.36.963-2.277 2-3m5-1h5a4 4 0 0 1 4 4v5M4 9h5m6 0h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jvayet_ht"/><path class="mp-l3bbdv"/></g>`,
		"fallback": "coolicons:calendar-off-duocolor-round",
	});
}

export default Component;
