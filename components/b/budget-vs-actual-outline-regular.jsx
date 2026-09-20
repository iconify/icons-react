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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.nn2mbucfp {
  d: path("M5 20V8h5v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.wwyi7ubez {
  d: path("M14 20v-6h5v6");
}
</style><g class="nrj6p8qat"><path class="jkuojibnm"/><path class="nn2mbucfp"/><path class="wwyi7ubez"/><path class="om9c7ck0x"/></g>`,
		"fallback": "iconmind:budget-vs-actual-outline-regular",
	});
}

export default Component;
