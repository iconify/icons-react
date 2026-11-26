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
		"content": `<style>.hbltp_67h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 7L19 7C20.1046 7 21 7.8954 21 9L21 15C21 16.1046 20.1046 17 19 17L13 17C11.8954 17 11 16.1046 11 15L11 9C11 7.8954 11.8954 7 13 7ZM3 3H21M3 21H21M3 9H7M3 15H7");
}
</style><path class="hbltp_67h"/>`,
		"fallback": "keyline-icons:image-wrap-right",
	});
}

export default Component;
