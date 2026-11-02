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
		"content": `<style>.lw6t35brr {
  d: path("M4 4h16v16H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sazxk1b4f {
  stroke-opacity: 0.4;
  d: path("M4 9h16M4 15h16M9 4v16m6-16v16");
}
</style><g class="nrj6p8qat"><path class="sazxk1b4f"/><path class="lw6t35brr"/></g>`,
		"fallback": "coolicons:grid-alt-duocolor-sharp",
	});
}

export default Component;
