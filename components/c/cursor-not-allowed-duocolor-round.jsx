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

.tcrxu8q4x {
  d: path("m3 3l12 4l-4 1l1 1a1.414 1.414 0 0 1 0 2l-1 1a1.414 1.414 0 0 1-2 0l-1-1l-1 4z");
}

.wfqzzweiu {
  stroke-opacity: 0.4;
  d: path("M19 14a3.606 3.606 0 1 1-4 6a3.606 3.606 0 0 1 4-6m-4 6l4-6");
}
</style><g class="nrj6p8qat"><path class="wfqzzweiu"/><path class="tcrxu8q4x"/></g>`,
		"fallback": "coolicons:cursor-not-allowed-duocolor-round",
	});
}

export default Component;
