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
		"content": `<style>.mz_tbsbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V4A1.5 1.5 0 0 1 5 2.5h6.5A1.5 1.5 0 0 1 13 4v17.5m-2.75-9h.01m9.24.75l-3.5 4h4l-3.5 4");
}
</style><path class="mz_tbsbpg"/>`,
		"fallback": "uix:door-trigger",
	});
}

export default Component;
