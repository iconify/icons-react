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
		"content": `<style>.pma5f1bkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 2L4 22M4 4L19.6664 9.5285C20.1112 9.6855 20.1112 10.3145 19.6664 10.4715L4 16");
}
</style><path class="pma5f1bkx"/>`,
		"fallback": "keyline-icons:flag-triangle-right",
	});
}

export default Component;
