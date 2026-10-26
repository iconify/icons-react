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
		"content": `<style>.i-ykrtbha {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L7 2L7 5L11 5L11 2L13 2L13 5L17 5L17 2L19 2L19 7L16.5 10L17.5 17L20 18L20 22L4 22L4 18L6.5 17L7.5 10L5 7ZM7.5 10L16.5 10M6.5 17L17.5 17");
}
</style><path class="i-ykrtbha"/>`,
		"fallback": "keyline-icons:chess-rook-sharp",
	});
}

export default Component;
