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

.ozhxo4zpx {
  d: path("M7 3v3c0 .64.36 1.36 1 2l4 4l-4 4c-.64.64-1 1.36-1 2v3M17 3v3c0 .64-.36 1.36-1 2l-4 4l4 4c.64.64 1 1.36 1 2v3");
}

.yvebdkb2o {
  stroke-opacity: 0.4;
  d: path("M5 3h14M5 21h14");
}
</style><g class="nrj6p8qat"><path class="yvebdkb2o"/><path class="ozhxo4zpx"/></g>`,
		"fallback": "coolicons:hourglass-duocolor",
	});
}

export default Component;
