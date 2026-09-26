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
		"content": `<style>.f8f_ihw3i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5L22 9L12 13L2 9L12 5ZM6 10.6L6 16.7901C7.6737 18.2165 9.8009 19 12 19C14.1991 19 16.3263 18.2165 18 16.7901L18 10.6M2 9L2 16");
}
</style><path class="f8f_ihw3i"/>`,
		"fallback": "keyline-icons:graduation-cap-sharp",
	});
}

export default Component;
