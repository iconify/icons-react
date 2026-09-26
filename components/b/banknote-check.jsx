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
		"content": `<style>.iim9wiv8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12L22 4C22 2.8954 21.1046 2 20 2L4 2C2.8954 2 2 2.8954 2 4L2 14C2 15.1046 2.8954 16 4 16L12 16M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.8954 10.8954 7 12 7C13.1046 7 14 7.8954 14 9ZM17 6L18 6M7 12L6 12M16 19.6L18.3333 22L22 16");
}
</style><path class="iim9wiv8c"/>`,
		"fallback": "keyline-icons:banknote-check",
	});
}

export default Component;
