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
		"content": `<style>.f5e6x3ddq {
  d: path("M14.5 12v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qxpc-f42y {
  d: path("M9.5 12v7");
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="nrj6p8qat"><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="qxpc-f42y"/><path class="f5e6x3ddq"/></g>`,
		"fallback": "iconmind:aisle-outline-regular",
	});
}

export default Component;
