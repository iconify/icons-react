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
		"content": `<style>.cx6tfbb9x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 2L15 2C16.65685 2 18 3.34315 18 5L18 19C18 20.65685 16.65685 22 15 22L9 22C7.34315 22 6 20.65685 6 19L6 5C6 3.34315 7.34315 2 9 2Z");
  stroke: none;
}

.irrlk8j5t {
  d: path("M9 3L15 3C16.10457 3 17 3.89543 17 5L17 19C17 20.10457 16.10457 21 15 21L9 21C7.89543 21 7 20.10457 7 19L7 5C7 3.89543 7.89543 3 9 3ZM3 3V21M21 3V21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cx6tfbb9x"/><path class="irrlk8j5t"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-two-tone",
	});
}

export default Component;
