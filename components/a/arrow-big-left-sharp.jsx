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
		"content": `<style>.uxifpunfb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L10 4L10 8L22 8L22 16L10 16L10 20Z");
}
</style><path class="uxifpunfb"/>`,
		"fallback": "keyline-icons:arrow-big-left-sharp",
	});
}

export default Component;
