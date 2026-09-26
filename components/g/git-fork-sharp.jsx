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
		"content": `<style>.zhleupbtp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9L6 15L6 12L18 12L18 9M6 3C7.6569 3 9 4.3431 9 6C9 7.6569 7.6569 9 6 9C4.3431 9 3 7.6569 3 6C3 4.3431 4.3431 3 6 3ZM18 3C19.6569 3 21 4.3431 21 6C21 7.6569 19.6569 9 18 9C16.3431 9 15 7.6569 15 6C15 4.3431 16.3431 3 18 3ZM6 15C7.6569 15 9 16.3431 9 18C9 19.6569 7.6569 21 6 21C4.3431 21 3 19.6569 3 18C3 16.3431 4.3431 15 6 15Z");
}
</style><path class="zhleupbtp"/>`,
		"fallback": "keyline-icons:git-fork-sharp",
	});
}

export default Component;
