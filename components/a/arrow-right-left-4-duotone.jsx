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
		"content": `<style>.e51u4gbaa {
  stroke-opacity: 0.4;
  d: path("M3 8L21 8L17 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q7yedcbtb {
  d: path("M21 16L3 16L7 20");
}
</style><g class="nrj6p8qat"><path class="e51u4gbaa"/><path class="q7yedcbtb"/></g>`,
		"fallback": "keyline-icons:arrow-right-left-4-duotone",
	});
}

export default Component;
