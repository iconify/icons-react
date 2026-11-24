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
		"content": `<style>.a6fkudb8m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17H8c-.64 0-1.36.36-2 1l-2 2c-.369.369-1-.262-1-1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-8 8l3 3l5-6");
}

.ft5dv1b6b {
  fill: none;
}

.ztgyyoyez {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H11a2 2 0 0 0-2 2v6H8c-.763 0-1.479.48-2 1l-2 2c-.369.369-1-.262-1-1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z");
}
</style><g class="ft5dv1b6b"><path class="ztgyyoyez"/><path class="a6fkudb8m"/></g>`,
		"fallback": "coolicons:chat-check-corner-duotone",
	});
}

export default Component;
