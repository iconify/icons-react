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
		"content": `<style>.ptof3_-3h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 2L12 2L12 10L10 12L12 14L12 22L15 22");
}
</style><path class="ptof3_-3h"/>`,
		"fallback": "keyline-icons:brace-left-sharp-two-tone",
	});
}

export default Component;
