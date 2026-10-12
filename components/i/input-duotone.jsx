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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qozjpwdsd {
  d: path("M6 11L6 13");
}

.sncq5wmtz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 9C1 7.3431 2.3431 6 4 6L20 6C21.6569 6 23 7.3431 23 9L23 15C23 16.6569 21.6569 18 20 18L4 18C2.3431 18 1 16.6569 1 15L1 9Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="sncq5wmtz"/><path class="qozjpwdsd"/></g>`,
		"fallback": "keyline-icons:input-duotone",
	});
}

export default Component;
