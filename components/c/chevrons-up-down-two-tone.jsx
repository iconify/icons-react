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
		"content": `<style>.lg23rtbof {
  stroke-opacity: 0.4;
  d: path("M7 9L12 4L17 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tsp8w5b4l {
  d: path("M7 15L12 20L17 15");
}
</style><g class="nrj6p8qat"><path class="lg23rtbof"/><path class="tsp8w5b4l"/></g>`,
		"fallback": "keyline-icons:chevrons-up-down-two-tone",
	});
}

export default Component;
