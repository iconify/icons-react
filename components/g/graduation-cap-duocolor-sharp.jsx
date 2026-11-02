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
		"content": `<style>.ma7kj7bez {
  d: path("m12 6l8 4l-8 4l-8-4zm-4 6v4c0 1.105 1.79 2 4 2s4-.895 4-2v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrgtqqgqc {
  stroke-opacity: 0.4;
  d: path("M20 10v5");
}
</style><g class="nrj6p8qat"><path class="rrgtqqgqc"/><path class="ma7kj7bez"/></g>`,
		"fallback": "coolicons:graduation-cap-duocolor-sharp",
	});
}

export default Component;
