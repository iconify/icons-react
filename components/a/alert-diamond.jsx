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
		"content": `<style>.ahfcwo_-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.475 4.975l4.55 4.55a3.5 3.5 0 0 1 0 4.95l-4.55 4.55a3.5 3.5 0 0 1-4.95 0l-4.55-4.55a3.5 3.5 0 0 1 0-4.95l4.55-4.55a3.5 3.5 0 0 1 4.95 0M12 7v6m0 3.5h.01");
}
</style><path class="ahfcwo_-y"/>`,
		"fallback": "uix:alert-diamond",
	});
}

export default Component;
