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
		"content": `<style>.vjf5jwbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.5h10.5A1.75 1.75 0 0 1 19 5.25v7.5a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 12.75v-7.5A1.75 1.75 0 0 1 6.75 3.5m-4.25 11h19M12 2v1.5m-4 11l-2.5 7m10.5-7l2.5 7m-6.5-7v7");
}
</style><path class="vjf5jwbre"/>`,
		"fallback": "uix:art-studio",
	});
}

export default Component;
