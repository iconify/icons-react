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
		"content": `<style>.eoqhj85zl {
  d: path("m12 4l4 6l5-4l-2 11H5L3 6l5 4z");
}

.mnafb_b5y {
  stroke-opacity: 0.4;
  d: path("M5 21h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mnafb_b5y"/><path class="eoqhj85zl"/></g>`,
		"fallback": "coolicons:crown-duocolor-sharp",
	});
}

export default Component;
