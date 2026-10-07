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
		"content": `<style>.fmmd7vbqa {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L6 2L6 10L4 12L6 14L6 22L9 22M15 2L18 2L18 10L20 12L18 14L18 22L15 22");
}
</style><path class="fmmd7vbqa"/>`,
		"fallback": "keyline-icons:braces-sharp-two-tone",
	});
}

export default Component;
