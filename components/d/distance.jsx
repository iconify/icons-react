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
		"content": `<style>.b-llpkbpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13h15.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 19H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 13M6 13v2.25M9 13v2.25M12 13v3.25M15 13v2.25M18 13v2.25M3.5 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m14 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-11 0h11");
}
</style><path class="b-llpkbpc"/>`,
		"fallback": "uix:distance",
	});
}

export default Component;
