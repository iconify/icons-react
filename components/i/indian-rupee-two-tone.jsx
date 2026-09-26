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
		"content": `<style>.z8hz16hbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 2L18 2M6 7L18 7M15 2C15 5.9361 12.6333 9.4861 9 11L6 11L16 22");
}
</style><path class="z8hz16hbc"/>`,
		"fallback": "keyline-icons:indian-rupee-two-tone",
	});
}

export default Component;
