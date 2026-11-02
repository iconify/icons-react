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
		"content": `<style>.cil--lbuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 8l5-5v7l1 3l-8 8l-8-8l1-3V3l5 5zm-5 4l1 1m5-1l-1 1m-2 3h.01");
}
</style><path class="cil--lbuj"/>`,
		"fallback": "coolicons:fox-sharp",
	});
}

export default Component;
