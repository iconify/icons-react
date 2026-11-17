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
		"content": `<style>.a6f5g6btf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 9h-4a2 2 0 0 0-2 2v4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm0 0h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4h4a2 2 0 0 0 2-2z");
}

.ft5dv1b6b {
  fill: none;
}

.gghuihl5s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 19v-4h4a2 2 0 0 0 2-2V9h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2m6-14v4h-4a2 2 0 0 0-2 2v4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2");
}
</style><g class="ft5dv1b6b"><path class="gghuihl5s"/><path class="a6f5g6btf"/></g>`,
		"fallback": "coolicons:boolean-exclude-duotone-round",
	});
}

export default Component;
