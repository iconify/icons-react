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
		"content": `<style>.vhse21bpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c4.5 0 7 7.5 7 12c0 4-3 7-7 7s-7-3-7-7c0-4.5 2.5-12 7-12M8.5 14h.01M12 14h.01m3.49 0h.01");
}
</style><path class="vhse21bpu"/>`,
		"fallback": "uix:easter-egg-dotted",
	});
}

export default Component;
