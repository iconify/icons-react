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

.gik0cutna {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H5v18M19 9v12h-4M13 3l6 6m-6-6v6h6m-9-3h.01M8 8h.01M10 10h.01M8 12h.01M10 16a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2");
}

.ifl2gyxbe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3a1 1 0 0 1 1-1h8c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a4 4 0 0 0-8-.003V18a1 1 0 0 1-2 0Zm9 6h5l-5-5Z");
}
</style><g class="ft5dv1b6b"><path class="ifl2gyxbe"/><path class="gik0cutna"/></g>`,
		"fallback": "coolicons:file-archive-duotone-sharp",
	});
}

export default Component;
