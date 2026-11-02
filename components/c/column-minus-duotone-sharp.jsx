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
		"content": `<style>.atb4s-jja {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h6v16H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.w1q3rgb0j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v16H4Zm10 8h6");
}
</style><g class="ft5dv1b6b"><path class="atb4s-jja"/><path class="w1q3rgb0j"/></g>`,
		"fallback": "coolicons:column-minus-duotone-sharp",
	});
}

export default Component;
