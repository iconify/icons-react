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

.j-nd_bb4w {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0M17 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 8v8m0 0a4 4 0 0 1 4-4h6a4 4 0 0 0 4-4");
}

.kz7-r4hmu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 6m14 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 6M3 18a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 18");
}
</style><g class="ft5dv1b6b"><path class="kz7-r4hmu"/><path class="j-nd_bb4w"/></g>`,
		"fallback": "coolicons:git-branch-duotone-round",
	});
}

export default Component;
