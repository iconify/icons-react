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

.xu7la8b8s {
  d: path("M13 4c-3 0-3 0-4 4l-2 8c-1 4-1 4-4 4m2-10h7");
}

.yex6avb7j {
  stroke-opacity: 0.4;
  d: path("M14 14h7m-4-3l-3 3l3 3");
}
</style><g class="nrj6p8qat"><path class="yex6avb7j"/><path class="xu7la8b8s"/></g>`,
		"fallback": "coolicons:function-arrow-left-duocolor",
	});
}

export default Component;
