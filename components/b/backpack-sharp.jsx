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
		"content": `<style>.r1-rlqcgd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 15H20M9 10H15M8 15V19M15 6V5C15 3.343 13.657 2 12 2C10.343 2 9 3.343 9 5V6M4 22H20V6H4V22Z");
}
</style><path class="r1-rlqcgd"/>`,
		"fallback": "keyline-icons:backpack-sharp",
	});
}

export default Component;
