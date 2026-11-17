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
		"content": `<style>.is_4m5cif {
  d: path("m12 3l8 7v11H4V10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z_4h_acyz {
  stroke-opacity: 0.4;
  d: path("M12 18H8l1-8h3m0 0h3l1 8h-4m-3-4h6m-3-4v8");
}
</style><g class="nrj6p8qat"><path class="z_4h_acyz"/><path class="is_4m5cif"/></g>`,
		"fallback": "coolicons:house-solar-panel-duocolor-sharp",
	});
}

export default Component;
