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

.hat2erv9f {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l8 7v11H4V10zm-2 12a2.83 2.83 0 0 1 4 0m-7-2c2.563-3.204 7.437-3.204 10 0m-5 5h.01");
}

.qab80b9mo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 10v11H4V10l8-7Z");
}
</style><g class="ft5dv1b6b"><path class="qab80b9mo"/><path class="hat2erv9f"/></g>`,
		"fallback": "coolicons:house-wifi-duotone-sharp",
	});
}

export default Component;
