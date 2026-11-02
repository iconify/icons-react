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
		"content": `<style>.g3x--wjvo {
  d: path("M3 5v14M3 9h16a2 2 0 0 1 2 2v8M3 16h18");
}

.hk0u4yb2t {
  stroke-opacity: 0.4;
  d: path("M7 9v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hk0u4yb2t"/><path class="g3x--wjvo"/></g>`,
		"fallback": "coolicons:bed-duocolor",
	});
}

export default Component;
