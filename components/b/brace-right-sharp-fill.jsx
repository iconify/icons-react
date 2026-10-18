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
		"content": `<style>.oau9ewzux {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L12 2L12 10L14 12L12 14L12 22L9 22");
}
</style><path class="oau9ewzux"/>`,
		"fallback": "keyline-icons:brace-right-sharp-fill",
	});
}

export default Component;
