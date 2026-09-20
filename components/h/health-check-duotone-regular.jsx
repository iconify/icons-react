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
		"content": `<style>.bm1a0ccnq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h5V6h4v12h4v-6h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i7kaf-qlz {
  d: path("M3 12h5V6h4v12h4v-6h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bm1a0ccnq"/><path class="i7kaf-qlz"/></g>`,
		"fallback": "iconmind:health-check-duotone-regular",
	});
}

export default Component;
