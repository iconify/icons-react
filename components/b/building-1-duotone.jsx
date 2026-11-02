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

.meb3hcbia {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 20v-5c0-1.039.578-1.992 1.293-2.707l3-3a2.414 2.414 0 0 1 3.414 0l3 3C19.422 13.008 20 13.961 20 15v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1");
}

.wl8pbpd6w {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-5c0-.64.36-1.36 1-2l3-3a1.414 1.414 0 0 1 2 0l3 3c.64.64 1 1.36 1 2v5m-7-9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14");
}
</style><g class="ft5dv1b6b"><path class="meb3hcbia"/><path class="wl8pbpd6w"/></g>`,
		"fallback": "coolicons:building-1-duotone",
	});
}

export default Component;
