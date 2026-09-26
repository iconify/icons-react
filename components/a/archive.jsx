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
		"content": `<style>.c_r0zufox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L20 4C21.1046 4 22 4.8954 22 6L22 7C22 8.1046 21.1046 9 20 9L4 9C2.8954 9 2 8.1046 2 7L2 6C2 4.8954 2.8954 4 4 4ZM4 9L4 17C4 18.6569 5.3431 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 9M10 13L14 13");
}
</style><path class="c_r0zufox"/>`,
		"fallback": "keyline-icons:archive",
	});
}

export default Component;
