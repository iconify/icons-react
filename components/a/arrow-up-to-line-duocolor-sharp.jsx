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
		"content": `<style>.hl_mejm0r {
  stroke-opacity: 0.4;
  d: path("M6 4h12");
}

.i8aq9_b_u {
  d: path("m16 12l-4-4l-4 4m4-4v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hl_mejm0r"/><path class="i8aq9_b_u"/></g>`,
		"fallback": "coolicons:arrow-up-to-line-duocolor-sharp",
	});
}

export default Component;
