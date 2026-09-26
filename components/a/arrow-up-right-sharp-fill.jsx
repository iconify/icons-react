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
		"content": `<style>.j9ngsnuyh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6L18 6L18 19M6.9071 17.0929L17.8243 6.1757");
}
</style><path class="j9ngsnuyh"/>`,
		"fallback": "keyline-icons:arrow-up-right-sharp-fill",
	});
}

export default Component;
