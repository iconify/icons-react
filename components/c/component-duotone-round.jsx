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
		"content": `<style>.d9oi_-bbs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 4l1 1a1.414 1.414 0 0 1 0 2l-2 2a1.414 1.414 0 0 1-2 0L9 7a1.414 1.414 0 0 1 0-2l2-2a1.414 1.414 0 0 1 2 0zm-6 6l1 1a1.414 1.414 0 0 1 0 2l-2 2a1.414 1.414 0 0 1-2 0l-2-2a1.414 1.414 0 0 1 0-2l2-2a1.414 1.414 0 0 1 2 0zm12 0l1 1a1.414 1.414 0 0 1 0 2l-2 2a1.414 1.414 0 0 1-2 0l-2-2a1.414 1.414 0 0 1 0-2l2-2a1.414 1.414 0 0 1 2 0zm-6 6l1 1a1.414 1.414 0 0 1 0 2l-2 2a1.414 1.414 0 0 1-2 0l-2-2a1.414 1.414 0 0 1 0-2l2-2a1.414 1.414 0 0 1 2 0z");
}

.ft5dv1b6b {
  fill: none;
}

.shctg_sis {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 5a1.415 1.415 0 0 1 0 2l-2 2a1.415 1.415 0 0 1-2 0L9 7a1.415 1.415 0 0 1 0-2l2-2a1.415 1.415 0 0 1 2 0Zm-6 6a1.415 1.415 0 0 1 0 2l-2 2a1.415 1.415 0 0 1-2 0l-2-2a1.415 1.415 0 0 1 0-2l2-2a1.415 1.415 0 0 1 2 0Zm12 0a1.415 1.415 0 0 1 0 2l-2 2a1.415 1.415 0 0 1-2 0l-2-2a1.415 1.415 0 0 1 0-2l2-2a1.415 1.415 0 0 1 2 0Zm-6 6a1.415 1.415 0 0 1 0 2l-2 2a1.415 1.415 0 0 1-2 0l-2-2a1.415 1.415 0 0 1 0-2l2-2a1.415 1.415 0 0 1 2 0Z");
}
</style><g class="ft5dv1b6b"><path class="shctg_sis"/><path class="d9oi_-bbs"/></g>`,
		"fallback": "coolicons:component-duotone-round",
	});
}

export default Component;
