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
		"content": `<style>.pg7xppbgw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 20H1M23 4H1M17 9H7V12V15H17V12V9Z");
}
</style><path class="pg7xppbgw"/>`,
		"fallback": "keyline-icons:align-vertical-space-around-sharp",
	});
}

export default Component;
