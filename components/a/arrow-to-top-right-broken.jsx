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
		"content": `<style>.jueal6bpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 9.5L12 4.5L7 9.5M12 4.5L12 11M12 14.5C12 16.1667 13 19.5 17 19.5");
}
</style><path class="jueal6bpk"/>`,
		"fallback": "solar:arrow-to-top-right-broken",
	});
}

export default Component;
