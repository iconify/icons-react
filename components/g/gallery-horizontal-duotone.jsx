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
		"content": `<style>.a04nyfbhi {
  d: path("M3 3L3 21M21 3L21 21");
}

.cx6tfbb9x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 2L15 2C16.65685 2 18 3.34315 18 5L18 19C18 20.65685 16.65685 22 15 22L9 22C7.34315 22 6 20.65685 6 19L6 5C6 3.34315 7.34315 2 9 2Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cx6tfbb9x"/><path class="a04nyfbhi"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-duotone",
	});
}

export default Component;
