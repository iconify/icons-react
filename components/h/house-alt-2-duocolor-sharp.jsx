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
		"content": `<style>.ldyizlhnj {
  d: path("M3 20h18M5 20v-9l7-7l7 7v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra34vcrze {
  stroke-opacity: 0.4;
  d: path("M10 20v-4a2 2 0 1 1 4 0v4");
}
</style><g class="nrj6p8qat"><path class="ra34vcrze"/><path class="ldyizlhnj"/></g>`,
		"fallback": "coolicons:house-alt-2-duocolor-sharp",
	});
}

export default Component;
