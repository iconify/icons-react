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

.gievz-bbr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3.515 13a8.487 8.487 0 1 1 16.973 0a8.486 8.486 0 1 1-16.973 0");
}

.os8-7k32y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 19a8.485 8.485 0 1 1 12 0m-6-6l3-3");
}
</style><g class="ft5dv1b6b"><path class="gievz-bbr"/><path class="os8-7k32y"/></g>`,
		"fallback": "coolicons:gauge-duotone-round",
	});
}

export default Component;
