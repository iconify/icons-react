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
		"content": `<style>.futcg5bwj {
  d: path("M7 8a5 5 0 0 1 10 0a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nugocvbqd {
  stroke-opacity: 0.4;
  d: path("m7 12l5 9l5-9");
}
</style><g class="nrj6p8qat"><path class="nugocvbqd"/><path class="futcg5bwj"/></g>`,
		"fallback": "coolicons:ice-cream-duocolor-sharp",
	});
}

export default Component;
