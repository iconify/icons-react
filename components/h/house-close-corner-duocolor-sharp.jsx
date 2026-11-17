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
		"content": `<style>.g5s6ahb7t {
  d: path("M8 21H4V10l8-7l5.714 5");
}

.l9ycfeb_j {
  stroke-opacity: 0.4;
  d: path("m14 14l6 6m0-6l-6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l9ycfeb_j"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-close-corner-duocolor-sharp",
	});
}

export default Component;
