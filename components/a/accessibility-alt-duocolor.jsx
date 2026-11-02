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
		"content": `<style>.aamb_ippd {
  stroke-opacity: 0.4;
  d: path("M11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.l4cebudyd {
  d: path("M5 10h14m-7 0v4l-4 6m4-6l4 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aamb_ippd"/><path class="l4cebudyd"/></g>`,
		"fallback": "coolicons:accessibility-alt-duocolor",
	});
}

export default Component;
