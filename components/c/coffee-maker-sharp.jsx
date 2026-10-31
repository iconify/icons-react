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
		"content": `<style>.o-giucb0r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 11L18 11L16 15L9 15ZM9 15L7.4 18L7 19.5L9.5 22L15.5 22L18 19.5L17.6 18L16 15M15 11L21 11L21 16M3 6L3 22L21 22M3 6L3 2L19 2L20.5 6Z");
}
</style><path class="o-giucb0r"/>`,
		"fallback": "keyline-icons:coffee-maker-sharp",
	});
}

export default Component;
