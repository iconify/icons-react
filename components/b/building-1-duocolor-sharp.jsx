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
		"content": `<style>.lor2vm6cu {
  stroke-opacity: 0.4;
  d: path("M12 10.6V4H5v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y8brb3-1p {
  d: path("M3 20h18M9 20v-7l5-4l5 4v7");
}
</style><g class="nrj6p8qat"><path class="lor2vm6cu"/><path class="y8brb3-1p"/></g>`,
		"fallback": "coolicons:building-1-duocolor-sharp",
	});
}

export default Component;
