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
		"content": `<style>.epou1mbuy {
  d: path("M11 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ps2g__eqt {
  fill: currentColor;
  d: path("M11 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}

.z640i9ymj {
  fill: currentColor;
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="nrj6p8qat"><path class="z640i9ymj"/><path class="ps2g__eqt"/><path class="sgjb9gifn"/><path class="zka_zabrc"/><path class="epou1mbuy"/></g>`,
		"fallback": "iconmind:contamination-check-duotone-regular",
	});
}

export default Component;
