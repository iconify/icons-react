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
		"content": `<style>.jnjjw1t0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 9C2 7.8954 2.8954 7 4 7L20 7C21.1046 7 22 7.8954 22 9L22 15C22 16.1046 21.1046 17 20 17L4 17C2.8954 17 2 16.1046 2 15L2 9ZM6 11L6 13");
}
</style><path class="jnjjw1t0g"/>`,
		"fallback": "keyline-icons:input",
	});
}

export default Component;
