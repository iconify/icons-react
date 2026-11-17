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
		"content": `<style>.n_9hu2b-q {
  stroke-opacity: 0.4;
  d: path("M10 21v-4a2 2 0 1 1 4 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o837pfbbc {
  d: path("M3 21h18M4 21v-9.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V21");
}
</style><g class="nrj6p8qat"><path class="n_9hu2b-q"/><path class="o837pfbbc"/></g>`,
		"fallback": "coolicons:house-alt-2-duocolor-round",
	});
}

export default Component;
