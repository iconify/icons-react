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
		"content": `<style>.bj0wacw7t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 7h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3");
}

.ft5dv1b6b {
  fill: none;
}

.m3xy1m8su {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9-2V6a2.55 2.55 0 1 0-3 2m3-2a2.55 2.55 0 1 1 3 2m-3 0v12m-9-6h18");
}
</style><g class="ft5dv1b6b"><path class="bj0wacw7t"/><path class="m3xy1m8su"/></g>`,
		"fallback": "coolicons:gift-duotone",
	});
}

export default Component;
