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
		"content": `<style>.ag9urgbjb {
  stroke-opacity: 0.4;
  d: path("m12 17l3-3l-3-3m3 3H9");
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
</style><g class="nrj6p8qat"><path class="ag9urgbjb"/><path class="is_4m5cif"/></g>`,
		"fallback": "coolicons:house-arrow-right-duocolor-sharp",
	});
}

export default Component;
