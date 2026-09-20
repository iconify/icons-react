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
		"content": `<style>.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8a7rmkzk {
  d: path("m7 4 5 5 5 -5");
}
</style><g class="nrj6p8qat"><path class="p8a7rmkzk"/><path class="eev_c9mlp"/></g>`,
		"fallback": "iconmind:chevrons-down-up-outline-regular",
	});
}

export default Component;
