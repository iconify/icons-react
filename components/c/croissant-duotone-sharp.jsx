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

.jx-rkk7az {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h6a2 2 0 0 1 2 2c2.209 0 4 1.343 4 3a2 2 0 0 1-2 2h-2c-1.326 0-2.853.312-4 1l1 2a.745.745 0 0 1-1 1l-2-1c-.688 1.147-1 2.674-1 4v2a2 2 0 0 1-2 2c-1.657 0-3-1.791-3-4a2 2 0 0 1-2-2V9a9.49 9.49 0 0 1 6-6");
}

.u0l8-pbha {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3a9.49 9.49 0 0 0-6 6l8 4l2 1c.64.32 1.32-.36 1-1l-1-2ZM3 9v6a2 2 0 0 0 2 2h5m-5 0c0 2.21 1.343 4 3 4a2 2 0 0 0 2-2v-2c0-1.5.4-3 1-4M9 3h6a2 2 0 0 1 2 2v5m0-5c2.21 0 4 1.343 4 3a2 2 0 0 1-2 2h-2c-1.5 0-3 .4-4 1");
}
</style><g class="ft5dv1b6b"><path class="jx-rkk7az"/><path class="u0l8-pbha"/></g>`,
		"fallback": "coolicons:croissant-duotone-sharp",
	});
}

export default Component;
