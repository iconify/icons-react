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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jkf87xxuz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14 4l6 6l-7 7l-6-6Z");
}

.w6mu83bjh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 11l7-7l6 6l-7 7zm1 1l-5 5v3h5l4-4");
}
</style><g class="ft5dv1b6b"><path class="jkf87xxuz"/><path class="w6mu83bjh"/></g>`,
		"fallback": "coolicons:highlighter-duotone-sharp",
	});
}

export default Component;
