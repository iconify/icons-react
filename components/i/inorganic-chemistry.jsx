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
		"content": `<style>.vmxqlnbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.5v-13L12 4l2.5 3.5v13m-9.5 0v-8L7.25 10l2.25 2m5 2l2.25-2.5L19 14v6.5m-16 0h18");
}
</style><path class="vmxqlnbti"/>`,
		"fallback": "uix:inorganic-chemistry",
	});
}

export default Component;
