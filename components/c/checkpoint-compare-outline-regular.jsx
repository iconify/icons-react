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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.l3l5pbb3j {
  d: path("M14 9h6.5v5H14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tmdcbizpt {
  d: path("M14 3v18");
}

.y-rdj5vjt {
  d: path("M4 5h6.5v5H4");
}
</style><g class="nrj6p8qat"><path class="crv4i00bu"/><path class="y-rdj5vjt"/><path class="tmdcbizpt"/><path class="l3l5pbb3j"/></g>`,
		"fallback": "iconmind:checkpoint-compare-outline-regular",
	});
}

export default Component;
