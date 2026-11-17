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
		"content": `<style>.khtpk2xyl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.352 9L5 10.1707L3 10.8775V20H6.5L7 18H17L17.5 20H21V10.8775L19 10.1707L18.648 9M5.352 9L7.5 4H16.5L18.648 9M5.352 9H2.5M18.648 9H21.5M13.293 7.7071L10 11H14L10.707 14.2929");
}
</style><path class="khtpk2xyl"/>`,
		"fallback": "keyline-icons:car-electric-sharp",
	});
}

export default Component;
