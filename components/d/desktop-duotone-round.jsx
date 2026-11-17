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

.htcmevx-r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm0 5h16M9 20h6");
}

.s277wjzka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 13a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z");
}
</style><g class="ft5dv1b6b"><path class="s277wjzka"/><path class="htcmevx-r"/></g>`,
		"fallback": "coolicons:desktop-duotone-round",
	});
}

export default Component;
