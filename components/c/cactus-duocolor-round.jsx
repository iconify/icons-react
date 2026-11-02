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
		"content": `<style>.en_-s13zu {
  d: path("M9 21V6a3 3 0 0 1 6 0v15M5 21h14");
}

.mpk1byqsw {
  stroke-opacity: 0.4;
  d: path("M9 15H8a3 3 0 0 1-3-3V8m10 4h1a3 3 0 0 0 3-3V6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mpk1byqsw"/><path class="en_-s13zu"/></g>`,
		"fallback": "coolicons:cactus-duocolor-round",
	});
}

export default Component;
