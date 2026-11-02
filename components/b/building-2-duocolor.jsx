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
		"content": `<style>.c65_rsb5q {
  d: path("M3 20h18m-9 0V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14");
}

.kb9gpgaag {
  stroke-opacity: 0.4;
  d: path("m12 11l1-1a1.414 1.414 0 0 1 2 0l3 3c.64.64 1 1.36 1 2v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kb9gpgaag"/><path class="c65_rsb5q"/></g>`,
		"fallback": "coolicons:building-2-duocolor",
	});
}

export default Component;
