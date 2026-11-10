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
		"content": `<style>.adk1_rn2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 6C17.7614 6 20 8.239 20 11V19C20 20.657 18.6569 22 17 22H7C5.3431 22 4 20.657 4 19V11C4 8.239 6.2386 6 9 6M15 6H9M15 6V5C15 3.343 13.6569 2 12 2C10.3431 2 9 3.343 9 5V6M4 15H20M10 10H14M8 15V18");
}
</style><path class="adk1_rn2t"/>`,
		"fallback": "keyline-icons:backpack",
	});
}

export default Component;
