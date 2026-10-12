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
		"content": `<style>.qc24_-13h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 7L2 7L2 17L13 17M6 10L6 14M17.9543 17L15.8719 10.8669L22 13.0514L19.4086 14.3063L17.9543 17Z");
}
</style><path class="qc24_-13h"/>`,
		"fallback": "keyline-icons:input-cursor-sharp",
	});
}

export default Component;
