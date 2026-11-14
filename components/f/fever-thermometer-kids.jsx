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
		"content": `<style>.p3vilf_ah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 14.25v-9a2.75 2.75 0 0 1 5.5 0v9a4 4 0 1 1-5.5 0M12 7v10");
}
</style><path class="p3vilf_ah"/>`,
		"fallback": "uix:fever-thermometer-kids",
	});
}

export default Component;
