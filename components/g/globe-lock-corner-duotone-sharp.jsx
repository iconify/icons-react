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
		"content": `<style>.cmm2b1b0c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 10h-7v7a7 7 0 1 1 7-7");
}

.ft5dv1b6b {
  fill: none;
}

.jf47labty {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 10a7 7 0 1 0-7 7m0-14c-4 0-4 14 0 14m0-14c2 0 3 3.5 3 7M3 10h14m-4 6h8v5h-8Zm2 0v-1a2 2 0 1 1 4 0v1");
}
</style><g class="ft5dv1b6b"><path class="cmm2b1b0c"/><path class="jf47labty"/></g>`,
		"fallback": "coolicons:globe-lock-corner-duotone-sharp",
	});
}

export default Component;
