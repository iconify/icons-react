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

.js-e70p_q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 7l1-1a4.243 4.243 0 0 1 6 6l-4 4a4.243 4.243 0 0 1-6 0l-4-4a4.243 4.243 0 0 1 6-6z");
}

.wia-d7b4n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 6a4.242 4.242 0 1 1 6 6l-4 4a4.24 4.24 0 0 1-6 0l-4-4a4.242 4.242 0 1 1 6-6l1 1Z");
}
</style><g class="ft5dv1b6b"><path class="wia-d7b4n"/><path class="js-e70p_q"/></g>`,
		"fallback": "coolicons:heart-alt-duotone-round",
	});
}

export default Component;
