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
		"content": `<style>.oxi0jx9ip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25c0-3-1.75-5-4.25-5s-4 1.75-4 4s1 3 2 3.25M12 9.25c0-3 1.75-5 4.25-5s4 1.75 4 4s-1 3-2 3.25M12 9.25v11");
}
</style><path class="oxi0jx9ip"/>`,
		"fallback": "iconoven:aries",
	});
}

export default Component;
