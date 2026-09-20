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

.s6jbysbtk {
  d: path("m9 7 -5 5 5 5");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="nrj6p8qat"><path class="sxlwlmkmh"/><path class="s6jbysbtk"/></g>`,
		"fallback": "iconmind:arrow-left-outline-regular",
	});
}

export default Component;
