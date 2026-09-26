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
		"content": `<style>.mng85pjuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L19 3C20.10457 3 21 3.89543 21 5L21 11C21 12.10457 20.10457 13 19 13L5 13C3.89543 13 3 12.10457 3 11L3 5C3 3.89543 3.89543 3 5 3ZM5 17H19M7 21H17");
}
</style><path class="mng85pjuy"/>`,
		"fallback": "keyline-icons:gallery-vertical-start",
	});
}

export default Component;
