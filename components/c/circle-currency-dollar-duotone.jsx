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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.sct98hluz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 12a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9");
}

.tah40zboo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m12-3a1 1 0 0 0-1-1h-3a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-3a1 1 0 0 1-1-1m3-9v2m0 8v2");
}
</style><g class="ft5dv1b6b"><path class="sct98hluz"/><path class="tah40zboo"/></g>`,
		"fallback": "coolicons:circle-currency-dollar-duotone",
	});
}

export default Component;
