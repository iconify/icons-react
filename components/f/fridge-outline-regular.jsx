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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q518x4bkb {
  d: path("M5 9h14");
}

.tkn_9lu9q {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.tqn4jcb4f {
  d: path("M8 11v3");
}

.y7whs8brt {
  d: path("M8 5v3");
}
</style><g class="nrj6p8qat"><path class="tkn_9lu9q"/><path class="q518x4bkb"/><path class="y7whs8brt"/><path class="tqn4jcb4f"/></g>`,
		"fallback": "iconmind:fridge-outline-regular",
	});
}

export default Component;
