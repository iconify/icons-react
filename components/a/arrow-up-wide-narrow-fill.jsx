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
		"content": `<style>.uztut218m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 18V6M2 10L5.6464 6.3536C5.8417 6.1583 6.1583 6.1583 6.3536 6.3536L10 10M14 6H22M14 10H20M14 14H18M14 18H16");
}
</style><path class="uztut218m"/>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-fill",
	});
}

export default Component;
