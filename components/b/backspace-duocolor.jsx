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

.uaw488bdq {
  d: path("M15 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5-5a1.414 1.414 0 0 1 0-2l5-5z");
}

.yagfc6xce {
  stroke-opacity: 0.4;
  d: path("m13 10l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="yagfc6xce"/><path class="uaw488bdq"/></g>`,
		"fallback": "coolicons:backspace-duocolor",
	});
}

export default Component;
