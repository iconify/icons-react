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
		"content": `<style>.m6cjo_bkv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L8 4C10.2091 4 12 5.7909 12 8C12 5.7909 13.7909 4 16 4L22 4L22 17L15 17C13.3431 17 12 18.3431 12 20C12 18.3431 10.6569 17 9 17L2 17L2 4ZM12 8L12 20");
}
</style><path class="m6cjo_bkv"/>`,
		"fallback": "keyline-icons:book-open-sharp",
	});
}

export default Component;
