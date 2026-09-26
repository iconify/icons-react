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
		"content": `<style>.x-oksib8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11L19 11C20.10457 11 21 11.89543 21 13L21 19C21 20.10457 20.10457 21 19 21L5 21C3.89543 21 3 20.10457 3 19L3 13C3 11.89543 3.89543 11 5 11ZM5 7H19M7 3H17");
}
</style><path class="x-oksib8b"/>`,
		"fallback": "keyline-icons:gallery-vertical-end",
	});
}

export default Component;
