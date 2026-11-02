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

.ofmul488o {
  stroke-opacity: 0.4;
  d: path("M9 15a3 3 0 1 1 0-6m3 6v-3m0-3v3m0-3h3m-3-6h3a3 3 0 1 1 0 6");
}

.r4ig58ryn {
  d: path("M9 15h3m-3 0a3 3 0 1 0 3 3v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6V3m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="nrj6p8qat"><path class="ofmul488o"/><path class="r4ig58ryn"/></g>`,
		"fallback": "coolicons:figma-duocolor",
	});
}

export default Component;
