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
		"content": `<style>.kcp529o7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 3L6 3C4.3431 3 3 4.3431 3 6L3 18C3 19.6569 4.3431 21 6 21L8 21M12 3L12 21M16 3L18 3C19.6569 3 21 4.3431 21 6M21 10.5L21 13.5M21 18C21 19.6569 19.6569 21 18 21L16 21");
}
</style><path class="kcp529o7i"/>`,
		"fallback": "keyline-icons:flip-2-horizontal",
	});
}

export default Component;
