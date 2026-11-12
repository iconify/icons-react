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
		"content": `<style>.y4zg3lf0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.5 14l-3.831 4.257a.9.9 0 0 1-1.338 0L3.635 9.705A1 1 0 0 1 3.67 8.33l2.743-2.743A2 2 0 0 1 7.828 5h8.344a2 2 0 0 1 1.414.586l2.743 2.743a1 1 0 0 1 .036 1.376zM8 9l2 2");
}
</style><path class="y4zg3lf0x"/>`,
		"fallback": "coolicons:gem",
	});
}

export default Component;
