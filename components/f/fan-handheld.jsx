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
		"content": `<style>.biu0lhb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 15l-8.5-3a4 4 0 0 1 3.25-4.25A4 4 0 0 1 12 6a4 4 0 0 1 5.25 1.75A4 4 0 0 1 20.5 12Zm0 0v5.5m0-5.5L6.75 7.75M12 15V6m0 9l5.25-7.25");
}
</style><path class="biu0lhb2x"/>`,
		"fallback": "uix:fan-handheld",
	});
}

export default Component;
