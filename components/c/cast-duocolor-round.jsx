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
		"content": `<style>.c0nl5isdz {
  stroke-opacity: 0.4;
  d: path("M3 11a8 8 0 0 1 8 8m-8-4a4 4 0 0 1 4 4m-4 0h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w8nrjub_x {
  d: path("M3 7a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2");
}
</style><g class="nrj6p8qat"><path class="c0nl5isdz"/><path class="w8nrjub_x"/></g>`,
		"fallback": "coolicons:cast-duocolor-round",
	});
}

export default Component;
