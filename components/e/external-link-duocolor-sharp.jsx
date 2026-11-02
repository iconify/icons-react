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
		"content": `<style>.mhbbxrb0o {
  d: path("M10 5H5v14h14v-5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phvznzb4o {
  stroke-opacity: 0.4;
  d: path("M15 4h5v5m0-5l-7 7");
}
</style><g class="nrj6p8qat"><path class="phvznzb4o"/><path class="mhbbxrb0o"/></g>`,
		"fallback": "coolicons:external-link-duocolor-sharp",
	});
}

export default Component;
