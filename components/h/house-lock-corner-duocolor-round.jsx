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
		"content": `<style>.aay9q5bec {
  d: path("M8 21a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0L17.714 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7b8nccnb {
  stroke-opacity: 0.4;
  d: path("M13 18a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm2-2v-1a2 2 0 1 1 4 0v1");
}
</style><g class="nrj6p8qat"><path class="o7b8nccnb"/><path class="aay9q5bec"/></g>`,
		"fallback": "coolicons:house-lock-corner-duocolor-round",
	});
}

export default Component;
