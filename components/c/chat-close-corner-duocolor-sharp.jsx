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
		"content": `<style>.l9ycfeb_j {
  stroke-opacity: 0.4;
  d: path("m14 14l6 6m0-6l-6 6");
}

.n--a33byg {
  d: path("M9 17H7l-4 4V3h18v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l9ycfeb_j"/><path class="n--a33byg"/></g>`,
		"fallback": "coolicons:chat-close-corner-duocolor-sharp",
	});
}

export default Component;
