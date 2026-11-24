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

.h1y38cbhk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 8a4 4 0 0 0-4 4v8l-5 1l1-5a8.945 8.945 0 0 1 16-8Z");
}

.suivsobzl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-3 6v4m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="h1y38cbhk"/><path class="suivsobzl"/></g>`,
		"fallback": "coolicons:chat-circle-warning-corner-duotone-round",
	});
}

export default Component;
