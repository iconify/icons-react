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

.xwzc_kphn {
  d: path("M15 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Zm-4-1H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5");
}

.zxl6wqb0d {
  stroke-opacity: 0.4;
  d: path("m15 17l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="nrj6p8qat"><path class="zxl6wqb0d"/><path class="xwzc_kphn"/></g>`,
		"fallback": "coolicons:devices-code-corner-duocolor",
	});
}

export default Component;
