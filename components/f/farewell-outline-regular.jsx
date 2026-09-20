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
		"content": `<style>.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.mpjzdqbcl {
  d: path("m18 10 2 2 -2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.r2dk7difb {
  d: path("M14 12h6");
}
</style><g class="nrj6p8qat"><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="r2dk7difb"/><path class="mpjzdqbcl"/></g>`,
		"fallback": "iconmind:farewell-outline-regular",
	});
}

export default Component;
