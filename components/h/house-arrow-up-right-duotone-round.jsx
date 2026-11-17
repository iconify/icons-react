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

.v1q0r8_vh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4zm-1-10h4v4m0-4l-6 6");
}

.xvfhj-u6p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4");
}
</style><g class="ft5dv1b6b"><path class="xvfhj-u6p"/><path class="v1q0r8_vh"/></g>`,
		"fallback": "coolicons:house-arrow-up-right-duotone-round",
	});
}

export default Component;
