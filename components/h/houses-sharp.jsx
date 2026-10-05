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
		"content": `<style>.mklk8cc6s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.6141 14.5258L6 14.2255L14 8L22 14.2255L22.3859 14.5258M8 12.6691L8 21L20 21L20 12.6691M1.6141 7.1912L2 6.8909L7 3L10.456 5.6894L10.8419 5.9897M4 5.3346L4 10.7134L4 11.7134M12 21L12 18C12 16.8954 12.8954 16 14 16C15.1046 16 16 16.8954 16 18L16 21");
}
</style><path class="mklk8cc6s"/>`,
		"fallback": "keyline-icons:houses-sharp",
	});
}

export default Component;
