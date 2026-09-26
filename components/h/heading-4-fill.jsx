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
		"content": `<style>.zl7231b9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4V20M11 4V20M2 12H11M17 13V17.5H22M21 13V20");
}
</style><path class="zl7231b9m"/>`,
		"fallback": "keyline-icons:heading-4-fill",
	});
}

export default Component;
