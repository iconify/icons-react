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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xy52n6bdp {
  d: path("M21 9V5H3v14h6M3 9h18");
}
</style><g class="nrj6p8qat"><path class="l9ycfeb_j"/><path class="xy52n6bdp"/></g>`,
		"fallback": "coolicons:credit-card-close-corner-duocolor-sharp",
	});
}

export default Component;
