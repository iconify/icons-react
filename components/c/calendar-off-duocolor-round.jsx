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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvmkqub0c {
  d: path("M19.284 19.284A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4V9c0-1.36.679-2.561 1.716-3.284M11 5h5a4 4 0 0 1 4 4v5M4 9h5m6 0h5");
}
</style><g class="nrj6p8qat"><path class="jvayet_ht"/><path class="qvmkqub0c"/></g>`,
		"fallback": "coolicons:calendar-off-duocolor-round",
	});
}

export default Component;
