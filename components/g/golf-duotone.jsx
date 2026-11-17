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
		"content": `<style>.cbb6_ybah {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V5c0-.919 1.081-1.46 2-1l4 2a1.118 1.118 0 0 1 0 2zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.ft5dv1b6b {
  fill: none;
}

.ts27pm8rc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 5c0-.919 1.081-1.459 2-1l4 2a1.118 1.118 0 0 1 0 2l-6 3Z");
}
</style><g class="ft5dv1b6b"><path class="ts27pm8rc"/><path class="cbb6_ybah"/></g>`,
		"fallback": "coolicons:golf-duotone",
	});
}

export default Component;
