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
		"content": `<style>.mu2hlo19k {
  stroke-opacity: 0.4;
  d: path("m13 13l3-8l4 4c.64.64 1 1.36 1 2v3a1 1 0 0 1-1 1h-1l-1-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s4ooybc2e {
  d: path("M3 18a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m3-2V9a1 1 0 0 1 1-1h1c.64 0 1.36.36 2 1l2 2c.64.64 1 1.36 1 2v3m-7-4h6");
}
</style><g class="nrj6p8qat"><path class="mu2hlo19k"/><path class="s4ooybc2e"/></g>`,
		"fallback": "coolicons:excavator-duocolor-round",
	});
}

export default Component;
