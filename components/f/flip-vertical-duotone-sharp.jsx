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
		"content": `<style>.flu26icqe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h10l-5 5Zm0 18l5-5l5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.im8-libzf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 3l5 5l5-5zm-2 9h2m4 0h2m4 0h2M7 21l5-5l5 5z");
}
</style><g class="ft5dv1b6b"><path class="flu26icqe"/><path class="im8-libzf"/></g>`,
		"fallback": "coolicons:flip-vertical-duotone-sharp",
	});
}

export default Component;
