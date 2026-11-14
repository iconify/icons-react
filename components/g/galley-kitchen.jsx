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
		"content": `<style>.da6r5obhk {
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v13.75A2.625 2.625 0 0 1 7.875 21.5h-2.75A2.625 2.625 0 0 1 2.5 18.875V5.125A2.625 2.625 0 0 1 5.125 2.5m13.5 0h.25A2.625 2.625 0 0 1 21.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-.25A2.625 2.625 0 0 1 16 18.875V5.125A2.625 2.625 0 0 1 18.625 2.5");
}

.fs3vmybki {
  d: path("M6.5 6zA1.5 1.5 0 0 1 8 7.5V10a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 5 10V7.5A1.5 1.5 0 0 1 6.5 6m-4 2.75H5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="da6r5obhk"/><path class="fs3vmybki"/></g>`,
		"fallback": "uix:galley-kitchen",
	});
}

export default Component;
