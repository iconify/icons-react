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
		"content": `<style>.d21zkk1sr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l6 9l-6 9l-6-9zm-6 9l6 3l6-3");
}

.ft5dv1b6b {
  fill: none;
}

.sedmwuddk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l6 9l-6 9l-6-9Z");
}
</style><g class="ft5dv1b6b"><path class="sedmwuddk"/><path class="d21zkk1sr"/></g>`,
		"fallback": "coolicons:currency-ethereum-duotone",
	});
}

export default Component;
