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
		"content": `<style>.v546l5z9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M7 17C10.2098 16.3367 12.8536 14.0706 14 11C15.1464 7.9294 17.7902 5.6633 21 5");
}
</style><path class="v546l5z9v"/>`,
		"fallback": "keyline-icons:chart-spline",
	});
}

export default Component;
