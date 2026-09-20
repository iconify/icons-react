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
		"content": `<style>.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w840k8bwr {
  d: path("m15 4 -4.5 4.5h3L9 13");
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="w840k8bwr"/></g>`,
		"fallback": "iconmind:deserialisation-flaw-outline-regular",
	});
}

export default Component;
