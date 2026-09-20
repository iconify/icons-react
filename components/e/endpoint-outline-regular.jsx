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
		"content": `<style>.mplr9elex {
  d: path("M15 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmhzb8pmw {
  d: path("m3 3 10 10");
}
</style><g class="nrj6p8qat"><path class="wmhzb8pmw"/><path class="mplr9elex"/></g>`,
		"fallback": "iconmind:endpoint-outline-regular",
	});
}

export default Component;
