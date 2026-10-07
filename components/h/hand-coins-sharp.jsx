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
		"content": `<style>.l7r9i03mn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 4.5C21 5.8807 19.8807 7 18.5 7C17.1193 7 16 5.8807 16 4.5C16 3.1193 17.1193 2 18.5 2C19.8807 2 21 3.1193 21 4.5ZM12 5.5C12 6.8807 10.8807 8 9.5 8C8.1193 8 7 6.8807 7 5.5C7 4.1193 8.1193 3 9.5 3C10.8807 3 12 4.1193 12 5.5ZM3 13L3 23M11 15.5L11 13L6.3 13L3 16.3M3 21L5 19L12 19L17 14C17.7811 13.2189 17.7811 11.9511 17 11.17C16.2189 10.3889 14.9511 10.3889 14.17 11.17L11.0498 14.2902");
}
</style><path class="l7r9i03mn"/>`,
		"fallback": "keyline-icons:hand-coins-sharp",
	});
}

export default Component;
