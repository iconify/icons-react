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
		"content": `<style>.h1fn4rz1b {
  stroke-opacity: 0.4;
  d: path("M9 11v6m6-6v6m-6-3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rs5a7rwsa {
  d: path("M5 13a7 7 0 0 1 14 0v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm7-7V3m-2 0h4");
}
</style><g class="nrj6p8qat"><path class="h1fn4rz1b"/><path class="rs5a7rwsa"/></g>`,
		"fallback": "coolicons:hydrogen-duocolor",
	});
}

export default Component;
