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
		"content": `<style>.ol0g_7f9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-12L6 8l3 1.5V4l3-1.5L15 4v3.5L18 6l3 1.5v14Zm6-12v12m6-14v14");
}
</style><path class="ol0g_7f9w"/>`,
		"fallback": "uix:basalt-columns",
	});
}

export default Component;
