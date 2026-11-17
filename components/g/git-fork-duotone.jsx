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
		"content": `<style>.eyh4va5au {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-7 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-6v4M5 8v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8");
}

.ft5dv1b6b {
  fill: none;
}

.s6ikctwul {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 6m14 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 6m-7 12a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 18");
}
</style><g class="ft5dv1b6b"><path class="s6ikctwul"/><path class="eyh4va5au"/></g>`,
		"fallback": "coolicons:git-fork-duotone",
	});
}

export default Component;
