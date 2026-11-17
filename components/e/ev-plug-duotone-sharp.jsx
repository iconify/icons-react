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

.i3xjh9b0f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 5a8.485 8.485 0 0 1 0 12a8.485 8.485 0 0 1-12 0A8.485 8.485 0 0 1 6 5Z");
}

.zv69vkhdf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5h12A8.485 8.485 0 1 1 6 5m2 4h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}
</style><g class="ft5dv1b6b"><path class="i3xjh9b0f"/><path class="zv69vkhdf"/></g>`,
		"fallback": "coolicons:ev-plug-duotone-sharp",
	});
}

export default Component;
