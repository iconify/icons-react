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
		"content": `<style>.fumiv_buo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5c1.897 0 3.616.444 4.971 1.258m3.02 4.894Q20 20.824 20 21m-5.25-3l2 2L21 15.75");
}
</style><path class="fumiv_buo"/>`,
		"fallback": "uix:account-nominee",
	});
}

export default Component;
