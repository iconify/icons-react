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
		"content": `<style>.e9bt6urym {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 20H1M23 10H1M16 14V20H8V14H16ZM20 10H4V4H20V10Z");
}
</style><path class="e9bt6urym"/>`,
		"fallback": "keyline-icons:align-vertical-distribute-end-sharp",
	});
}

export default Component;
