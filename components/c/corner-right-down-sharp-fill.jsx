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
		"content": `<style>.py_7xmyxn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.2929 15.7071L14 22L7.7071 15.7071M14 22L14 2L3 2");
}
</style><path class="py_7xmyxn"/>`,
		"fallback": "keyline-icons:corner-right-down-sharp-fill",
	});
}

export default Component;
