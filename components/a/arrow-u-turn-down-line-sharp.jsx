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
		"content": `<style>.e6zec7n7s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 15L5 12C5 9.2386 7.2386 7 10 7C12.7614 7 15 9.2386 15 12L15 20.6247M19.2191 15.7261L15 21L10.6998 15.6247M21 3L3 3");
}
</style><path class="e6zec7n7s"/>`,
		"fallback": "keyline-icons:arrow-u-turn-down-line-sharp",
	});
}

export default Component;
