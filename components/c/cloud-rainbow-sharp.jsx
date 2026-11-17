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
		"content": `<style>.x-73tzkep {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.033 8.93L6.215 8.16C7.068 4.55 10.291 2 14 2C18.418 2 22 5.582 22 10V16M10.501 7.998L10.801 7.598C11.557 6.592 12.742 6 14 6C16.209 6 18 7.791 18 10V14.2M14 22H5C3.343 22 2 20.657 2 19C2 17.343 3.343 16 5 16C5 13.515 7.015 11.5 9.5 11.5C11.985 11.5 14 13.515 14 16C15.657 16 17 17.343 17 19C17 20.657 15.657 22 14 22Z");
}
</style><path class="x-73tzkep"/>`,
		"fallback": "keyline-icons:cloud-rainbow-sharp",
	});
}

export default Component;
