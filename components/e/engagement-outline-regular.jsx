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

.nrzizubal {
  d: path("M7 15a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.uu-axlbah {
  d: path("m9 8 3 -3 3 3Z");
}
</style><g class="nrj6p8qat"><path class="nrzizubal"/><path class="uu-axlbah"/></g>`,
		"fallback": "iconmind:engagement-outline-regular",
	});
}

export default Component;
