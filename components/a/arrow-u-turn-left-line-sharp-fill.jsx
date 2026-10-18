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
		"content": `<style>.z0hbhjb5x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19L12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9L3.3753 9M8.2739 4.7809L3 9L8.3753 13.3002M21 3L21 21");
}
</style><path class="z0hbhjb5x"/>`,
		"fallback": "keyline-icons:arrow-u-turn-left-line-sharp-fill",
	});
}

export default Component;
