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
		"content": `<style>.fxyvm1b2m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L10 20L10 16L18 16L18 8L10 8L10 4ZM22 7L22 17");
}
</style><path class="fxyvm1b2m"/>`,
		"fallback": "keyline-icons:arrow-big-left-dash-sharp-duotone",
	});
}

export default Component;
