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
		"content": `<style>.fpd9j3buh {
  d: path("M2 8h9");
}

.gm3q67bcx {
  d: path("M11 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
}

.h10-q0bxq {
  d: path("M2 12h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.orpw_8d9q {
  d: path("M2 16h9");
}
</style><g class="nrj6p8qat"><path class="fpd9j3buh"/><path class="h10-q0bxq"/><path class="orpw_8d9q"/><path class="gm3q67bcx"/></g>`,
		"fallback": "iconmind:bundler-outline-regular",
	});
}

export default Component;
