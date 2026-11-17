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
		"content": `<style>.amr7ohb1p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 17a2 2 0 1 0-4 0v4H4V10l8-7l8 7v11h-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.g5thndb3y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v4h6V10l-8-7l-8 7v11h6v-4a2 2 0 1 1 4 0");
}
</style><g class="ft5dv1b6b"><path class="amr7ohb1p"/><path class="g5thndb3y"/></g>`,
		"fallback": "coolicons:house-alt-1-duotone-sharp",
	});
}

export default Component;
