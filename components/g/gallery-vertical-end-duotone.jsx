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
		"content": `<style>.knf9qebnr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 10L19 10C20.65685 10 22 11.34315 22 13L22 19C22 20.65685 20.65685 22 19 22L5 22C3.34315 22 2 20.65685 2 19L2 13C2 11.34315 3.34315 10 5 10Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.slwoc8bcd {
  d: path("M5 7L19 7M7 3L17 3");
}
</style><g class="nrj6p8qat"><path class="knf9qebnr"/><path class="slwoc8bcd"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-duotone",
	});
}

export default Component;
