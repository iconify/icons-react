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
		"content": `<style>.hguhncbil {
  stroke-opacity: 0.4;
  d: path("M12 7H9C7 7 6 6 6 5c0-2 2-2 3-1zm0 0h3c2 0 3-1 3-2c0-2-2-2-3-1zm0 0v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y121sptxz {
  d: path("M3 9a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m2 2v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6");
}
</style><g class="nrj6p8qat"><path class="hguhncbil"/><path class="y121sptxz"/></g>`,
		"fallback": "coolicons:gift-duocolor-round",
	});
}

export default Component;
