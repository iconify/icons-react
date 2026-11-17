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
		"content": `<style>.admnv1bfe {
  d: path("M3 20h18M9 20v-5.078a4 4 0 0 1 1.501-3.123l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 19 14.923V20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.opcwam8gv {
  stroke-opacity: 0.4;
  d: path("M12 10.6V4H9a4 4 0 0 0-4 4v12");
}
</style><g class="nrj6p8qat"><path class="opcwam8gv"/><path class="admnv1bfe"/></g>`,
		"fallback": "coolicons:building-1-duocolor-round",
	});
}

export default Component;
