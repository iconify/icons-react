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
		"content": `<style>.c5_wc7b7b {
  d: path("M4 15c6-3 10 3 16 0V4C14 7 10 1 4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkntuhbzi {
  stroke-opacity: 0.4;
  d: path("M4 15v6");
}
</style><g class="nrj6p8qat"><path class="tkntuhbzi"/><path class="c5_wc7b7b"/></g>`,
		"fallback": "coolicons:flag-duocolor-sharp",
	});
}

export default Component;
