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
		"content": `<style>.sz55tfbom {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7L16.6 10.4667L17 11.0001L17 20L15 22L9 22L7 20L7 11.0001L7.4 10.4667L10 7M18 7L6 7M16.2913 1.5145L13 7");
}
</style><path class="sz55tfbom"/>`,
		"fallback": "keyline-icons:can-soda-sharp",
	});
}

export default Component;
