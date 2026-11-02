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
		"content": `<style>.gq-ihhwqb {
  stroke-opacity: 0.4;
  d: path("M7 21h10v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg8i97nqv {
  d: path("M7 17h12V3H5v16m2-2a2 2 0 1 0 0 4");
}
</style><g class="nrj6p8qat"><path class="gq-ihhwqb"/><path class="pg8i97nqv"/></g>`,
		"fallback": "coolicons:book-duocolor-sharp",
	});
}

export default Component;
