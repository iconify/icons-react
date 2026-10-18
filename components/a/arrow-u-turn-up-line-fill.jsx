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
		"content": `<style>.dgc2frbtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 10L5 12C5 14.7614 7.2386 17 10 17C12.7614 17 15 14.7614 15 12L15 4M19 8L15.3904 3.1877C15.1903 2.9375 14.8097 2.9375 14.6096 3.1877L11 8M20 21L4 21");
}
</style><path class="dgc2frbtx"/>`,
		"fallback": "keyline-icons:arrow-u-turn-up-line-fill",
	});
}

export default Component;
