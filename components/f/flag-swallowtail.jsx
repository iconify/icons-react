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
		"content": `<style>.aqc-6obkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 2L4 22M4 4L18.9983 4C19.797 4 20.2734 4.8901 19.8303 5.5547L17.0517 9.7226C16.9398 9.8906 16.9398 10.1094 17.0517 10.2774L19.8303 14.4453C20.2734 15.1099 19.797 16 18.9983 16L4 16");
}
</style><path class="aqc-6obkw"/>`,
		"fallback": "keyline-icons:flag-swallowtail",
	});
}

export default Component;
