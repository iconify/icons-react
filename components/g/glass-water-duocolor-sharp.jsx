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
		"content": `<style>.bgy7uubjz {
  d: path("M5 3h14l-2 18H7z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t79xm3bzn {
  stroke-opacity: 0.4;
  d: path("M6 12h12");
}
</style><g class="nrj6p8qat"><path class="t79xm3bzn"/><path class="bgy7uubjz"/></g>`,
		"fallback": "coolicons:glass-water-duocolor-sharp",
	});
}

export default Component;
