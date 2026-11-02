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
		"content": `<style>.eh8r7jx3o {
  d: path("M6 5h12M6 5h4a4 4 0 1 1 0 8H6l6 6");
}

.i5dhe1bml {
  stroke-opacity: 0.4;
  d: path("M6 9h8m0 0h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i5dhe1bml"/><path class="eh8r7jx3o"/></g>`,
		"fallback": "coolicons:currency-rupee-duocolor-round",
	});
}

export default Component;
