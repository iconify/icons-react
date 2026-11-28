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
		"content": `<style>.zvze_tb8m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.14 7.2L8.5 7.5L10 8.75L8.5 10L8.14 10.3M15.86 7.2L15.5 7.5L14 8.75L15.5 10L15.86 10.3M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM8 14H16C16 16.209 14.209 18 12 18C9.791 18 8 16.209 8 14Z");
}
</style><path class="zvze_tb8m"/>`,
		"fallback": "keyline-icons:face-squint-sharp",
	});
}

export default Component;
