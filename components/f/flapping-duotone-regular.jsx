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
		"content": `<style>.f4yp5uw0u {
  d: path("M14 18.5a2 2 0 0 1 -4 0");
}

.hdrgscbgb {
  d: path("m9 13 2 -2 2 2 2 -2");
}

.k70w93buq {
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ro1o_8s6w {
  fill: currentColor;
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ro1o_8s6w"/><path class="k70w93buq"/><path class="f4yp5uw0u"/><path class="hdrgscbgb"/></g>`,
		"fallback": "iconmind:flapping-duotone-regular",
	});
}

export default Component;
