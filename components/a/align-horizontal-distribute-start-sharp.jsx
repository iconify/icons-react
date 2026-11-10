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
		"content": `<style>.rs9ndob3v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 1V23M14 1V23M20 8H14V16H20V8ZM4 4V20H10V4H4Z");
}
</style><path class="rs9ndob3v"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-start-sharp",
	});
}

export default Component;
