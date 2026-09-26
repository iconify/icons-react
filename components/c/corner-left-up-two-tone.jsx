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
		"content": `<style>.g8r5mgc6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8L10 2L16 8M10 2L10 18C10 20.2091 11.7909 22 14 22L20 22");
}
</style><path class="g8r5mgc6y"/>`,
		"fallback": "keyline-icons:corner-left-up-two-tone",
	});
}

export default Component;
