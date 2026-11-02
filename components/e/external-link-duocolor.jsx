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
		"content": `<style>.jwfo8tbfz {
  d: path("M10 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phvznzb4o {
  stroke-opacity: 0.4;
  d: path("M15 4h5v5m0-5l-7 7");
}
</style><g class="nrj6p8qat"><path class="phvznzb4o"/><path class="jwfo8tbfz"/></g>`,
		"fallback": "coolicons:external-link-duocolor",
	});
}

export default Component;
