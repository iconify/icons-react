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
		"content": `<style>.kh01vrbza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.6569 3L18 3C19.6569 3 21 4.3431 21 6L21 15.3431M20.1213 20.1213C19.5785 20.6642 18.8285 21 18 21L6 21C4.3431 21 3 19.6569 3 18L3 6C3 5.1716 3.3358 4.4216 3.8787 3.8787M3 9L9 9M14.6569 9L21 9M16.7071 16.7071C16.5262 16.8881 16.2762 17 16 17L8 17C7.4477 17 7 16.5523 7 16L7 14C7 13.4477 7.4477 13 8 13L13 13M2 2L22 22");
}
</style><path class="kh01vrbza"/>`,
		"fallback": "keyline-icons:iframe-off",
	});
}

export default Component;
