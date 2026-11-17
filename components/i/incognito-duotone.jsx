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
		"content": `<style>.axnr_bwyr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 5c.154-.384.52-.999 1-1h6c.48.001.846.616 1 1l2 5H6Z");
}

.ft5dv1b6b {
  fill: none;
}

.tfbpjbezx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 10l2-5c.242-.604.638-1 1-1h6c.362 0 .758.396 1 1l2 5M3 10h18M4 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-4 0a2 2 0 1 1 4 0");
}
</style><g class="ft5dv1b6b"><path class="axnr_bwyr"/><path class="tfbpjbezx"/></g>`,
		"fallback": "coolicons:incognito-duotone",
	});
}

export default Component;
