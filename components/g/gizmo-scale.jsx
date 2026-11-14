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
		"content": `<style>.ox_hmtyie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 14V6.5M9 14h8.5M9 14l-3.25 3.25M8.75 3h.5a1.5 1.5 0 0 1 1.5 1.5V5a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 7.25 5v-.5A1.5 1.5 0 0 1 8.75 3M19 12.25h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m-15 5h.25a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-.25a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ox_hmtyie"/>`,
		"fallback": "uix:gizmo-scale",
	});
}

export default Component;
