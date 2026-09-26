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
		"content": `<style>.bfqovgbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.1716 3.5858L21.4142 7.8284C22.1952 8.6095 22.1952 9.8758 21.4142 10.6569L11.0711 21L5.4142 21L2.5858 18.1716C1.8047 17.3905 1.8047 16.1242 2.5858 15.3431L14.3431 3.5858C15.1242 2.8047 16.3905 2.8047 17.1716 3.5858ZM8 9.9289L15.0711 17M8.2427 21L22 21");
}
</style><path class="bfqovgbwk"/>`,
		"fallback": "keyline-icons:eraser",
	});
}

export default Component;
