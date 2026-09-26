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
		"content": `<style>.x8pfykbzq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12ZM9 9L9 12M15 9L15 12M8.7071 14.7071L9 15C10 16 11 16.5 12 16.5C13 16.5 14 16 15 15L15.2929 14.7071");
}
</style><path class="x8pfykbzq"/>`,
		"fallback": "keyline-icons:face-smile-sharp",
	});
}

export default Component;
