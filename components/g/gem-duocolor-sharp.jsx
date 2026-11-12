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
		"content": `<style>.anozd_bhu {
  d: path("M7 5h10l4 4l-9 10L3 9z");
}

.h5nl8ib0a {
  stroke-opacity: 0.4;
  d: path("m8 9l2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h5nl8ib0a"/><path class="anozd_bhu"/></g>`,
		"fallback": "coolicons:gem-duocolor-sharp",
	});
}

export default Component;
