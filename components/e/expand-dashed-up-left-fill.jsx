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
		"content": `<style>.soy-_013u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 13L18 3M21 6L18 3L15 6M13 18L3 18M6 15L3 18L6 21M3 11L3 9.6667M3 5.6667C3 4.1939 4.1939 3 5.6667 3M9.6667 3L11 3");
}
</style><path class="soy-_013u"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left-fill",
	});
}

export default Component;
