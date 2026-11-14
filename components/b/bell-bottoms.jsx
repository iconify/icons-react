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
		"content": `<style>.if1yvjyhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l1 7l3 11h-7l-2-11l-2 11H3l3-11Zm-.25 3h10.5");
}
</style><path class="if1yvjyhi"/>`,
		"fallback": "uix:bell-bottoms",
	});
}

export default Component;
