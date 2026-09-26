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
		"content": `<style>.smcqkob_w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.2993 4.6508L2 12L8.2993 19.3492M15.7007 4.6508L22 12L15.7007 19.3492");
}
</style><path class="smcqkob_w"/>`,
		"fallback": "keyline-icons:code-sharp",
	});
}

export default Component;
