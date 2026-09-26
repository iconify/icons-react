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
		"content": `<style>.nm76pbt0e {
  d: path("M10 19L14 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sfbfre4oy {
  stroke-opacity: 0.4;
  d: path("M6 7L2 12L6 17M18 7L22 12L18 17");
}
</style><g class="nrj6p8qat"><path class="sfbfre4oy"/><path class="nm76pbt0e"/></g>`,
		"fallback": "keyline-icons:code-xml-duotone",
	});
}

export default Component;
