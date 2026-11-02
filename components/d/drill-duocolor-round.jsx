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
		"content": `<style>.c4mutqv1p {
  d: path("M3 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm4 4v6m4-6v6m-6 2a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qu0uwrb0e {
  stroke-opacity: 0.4;
  d: path("M15 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2m3-2h3");
}
</style><g class="nrj6p8qat"><path class="qu0uwrb0e"/><path class="c4mutqv1p"/></g>`,
		"fallback": "coolicons:drill-duocolor-round",
	});
}

export default Component;
