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
		"content": `<style>.dnqvqz_ac {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.929 3L22 10.071L11.0711 21L7.071 21L2 15.929L14.929 3ZM8 9.9289L15.0711 17M9.071 21L23 21");
}
</style><path class="dnqvqz_ac"/>`,
		"fallback": "keyline-icons:eraser-sharp",
	});
}

export default Component;
