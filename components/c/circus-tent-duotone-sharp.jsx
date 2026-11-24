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

.k8fxwsblt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V11c0-2 6-2 8-4c2 2 8 2 8 4v10M3 21h5m8 0h5M4 11a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0m-8-4V3l3 1l-3 1M8 21l4-4l4 4");
}

.wgaelkbvu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 21V11c0-2 6-2 8-4c2 2 8 2 8 4v10Z");
}
</style><g class="ft5dv1b6b"><path class="wgaelkbvu"/><path class="k8fxwsblt"/></g>`,
		"fallback": "coolicons:circus-tent-duotone-sharp",
	});
}

export default Component;
