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
		"content": `<style>.rwi-yg3xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L8 4C10.2091 4 12 5.7909 12 8C12 5.7909 13.7909 4 16 4L20 4C21.1046 4 22 4.8954 22 6L22 15C22 16.1046 21.1046 17 20 17L15 17C13.3431 17 12 18.3431 12 20C12 18.3431 10.6569 17 9 17L4 17C2.8954 17 2 16.1046 2 15L2 6C2 4.8954 2.8954 4 4 4ZM12 8L12 20");
}
</style><path class="rwi-yg3xg"/>`,
		"fallback": "keyline-icons:book-open",
	});
}

export default Component;
