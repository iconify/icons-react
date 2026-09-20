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
		"content": `<style>.h_ozghejt {
  d: path("m4 7 5 5 -5 5");
}

.j4cr2gb0p {
  d: path("M11 17h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h_ozghejt"/><path class="j4cr2gb0p"/></g>`,
		"fallback": "iconmind:cli-outline-regular",
	});
}

export default Component;
