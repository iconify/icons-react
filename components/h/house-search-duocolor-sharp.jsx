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
		"content": `<style>.dpsf-bb7q {
  stroke-opacity: 0.4;
  d: path("M9 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}

.is_4m5cif {
  d: path("m12 3l8 7v11H4V10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dpsf-bb7q"/><path class="is_4m5cif"/></g>`,
		"fallback": "coolicons:house-search-duocolor-sharp",
	});
}

export default Component;
