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
		"content": `<style>.l_dup352m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 3L3 3L3 21L21 21L21 13M18 3C19.6568 3 21 4.3432 21 6C21 7.6569 19.6568 9 18 9C16.3432 9 15 7.6569 15 6C15 4.3432 16.3432 3 18 3Z");
}
</style><path class="l_dup352m"/>`,
		"fallback": "keyline-icons:app-dot-sharp",
	});
}

export default Component;
