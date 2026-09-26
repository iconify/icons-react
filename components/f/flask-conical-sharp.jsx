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
		"content": `<style>.lgv6vubxn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 2L14.5 2L14.5 8L19.9999 22L4.0001 22L9.5 8L9.5 2ZM7 2L17 2M5.5715 18L18.4285 18");
}
</style><path class="lgv6vubxn"/>`,
		"fallback": "keyline-icons:flask-conical-sharp",
	});
}

export default Component;
