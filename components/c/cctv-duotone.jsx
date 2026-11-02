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

.oulhoxbaj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m2 2v7a7 7 0 0 0 14 0V7M9 14a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3 0h.01");
}

.zkugb-9cx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4m7 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><g class="ft5dv1b6b"><path class="zkugb-9cx"/><path class="oulhoxbaj"/></g>`,
		"fallback": "coolicons:cctv-duotone",
	});
}

export default Component;
