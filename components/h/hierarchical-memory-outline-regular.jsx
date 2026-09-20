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
		"content": `<style>.g45hqpb0s {
  d: path("M10.5 12h3");
}

.meb7wcbot {
  d: path("M7 5h10");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="meb7wcbot"/><path class="o40l0bbgl"/><path class="g45hqpb0s"/></g>`,
		"fallback": "iconmind:hierarchical-memory-outline-regular",
	});
}

export default Component;
