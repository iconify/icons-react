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
		"content": `<style>.m-a017s7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.249 21.5H6v-15l12-4v11.551M9.5 10h.01m4.99 0h.01M9.5 13.5h.01M9.5 17h.01M15 21l6-6m-5.5.5h.01m4.99 5h.01");
}
</style><path class="m-a017s7d"/>`,
		"fallback": "uix:cap-rate",
	});
}

export default Component;
