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

.oj07yqbed {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 3h4a2 2 0 1 1 0 4h2a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-2v2H8v-2H6a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4h2a2 2 0 1 1 0-4");
}

.vqs_j5bwz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7h4a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4zM8 19v2h8v-2M4 13h16M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
}
</style><g class="ft5dv1b6b"><path class="oj07yqbed"/><path class="vqs_j5bwz"/></g>`,
		"fallback": "coolicons:gas-cylinder-duotone",
	});
}

export default Component;
