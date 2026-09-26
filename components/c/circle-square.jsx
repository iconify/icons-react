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
		"content": `<style>.i_n-l9b2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 9C16 5.1339 12.8661 2 9 2C5.1339 2 2 5.1339 2 9C2 12.8661 5.1339 16 9 16C12.8661 16 16 12.8661 16 9ZM11 9H20C21.1046 9 22 9.8954 22 11V20C22 21.1046 21.1046 22 20 22H11C9.8954 22 9 21.1046 9 20V11C9 9.8954 9.8954 9 11 9Z");
}
</style><path class="i_n-l9b2x"/>`,
		"fallback": "keyline-icons:circle-square",
	});
}

export default Component;
