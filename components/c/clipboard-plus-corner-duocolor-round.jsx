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
		"content": `<style>.m0z_pzvrc {
  stroke-opacity: 0.4;
  d: path("M13 17h8m-4-4v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wa4ya8bno {
  d: path("M9 5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4M19 9a4 4 0 0 0-4-4M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2");
}
</style><g class="nrj6p8qat"><path class="m0z_pzvrc"/><path class="wa4ya8bno"/></g>`,
		"fallback": "coolicons:clipboard-plus-corner-duocolor-round",
	});
}

export default Component;
