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
		"content": `<style>.khupvdbel {
  d: path("M20 4H10v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x7qdjyb5k {
  d: path("m5 15 5 5 5 -5");
}
</style><g class="nrj6p8qat"><path class="khupvdbel"/><path class="x7qdjyb5k"/></g>`,
		"fallback": "iconmind:corner-left-down-outline-regular",
	});
}

export default Component;
