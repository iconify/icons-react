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
		"content": `<style>.ryaniwbkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19L12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9L4 9M8 5L3.1877 8.6096C2.9375 8.8097 2.9375 9.1903 3.1877 9.3904L8 13M21 4L21 20");
}
</style><path class="ryaniwbkt"/>`,
		"fallback": "keyline-icons:arrow-u-turn-left-line-two-tone",
	});
}

export default Component;
