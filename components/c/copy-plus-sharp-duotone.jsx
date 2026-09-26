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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t0jqvxbuj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 7L22 7C22.5523 7 23 7.4477 23 8L23 22C23 22.5523 22.5523 23 22 23L8 23C7.4477 23 7 22.5523 7 22L7 8C7 7.4477 7.4477 7 8 7Z");
  stroke: none;
}

.vq-uucbkh {
  d: path("M16 5L16.0001 2L2 2L2 16.0001L5 16M15 11L15 19M11 15L19 15");
}
</style><g class="gp_8x1bzb"><path class="t0jqvxbuj"/><path class="vq-uucbkh"/></g>`,
		"fallback": "keyline-icons:copy-plus-sharp-duotone",
	});
}

export default Component;
