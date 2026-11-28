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
		"content": `<style>.zmdp0dbdz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 21L3 21L3 3M7.6569 3L21 3L21 16.3431M3 9L9 9M13.6569 9L21 9M17 17L7 17L7 13L13 13M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="zmdp0dbdz"/>`,
		"fallback": "keyline-icons:iframe-off-sharp",
	});
}

export default Component;
