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
		"content": `<style>.owc2yro2w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 1V23M10 1V23M4 8H10V16H4V8ZM20 4V20H14V4H20Z");
}
</style><path class="owc2yro2w"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-end-sharp",
	});
}

export default Component;
