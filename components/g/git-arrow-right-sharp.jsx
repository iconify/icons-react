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
		"content": `<style>.z24sesp2x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.909 15.1675L21 17.5L18.909 19.8325M6 22L6 9M18 12.5L18 6L12 6M20.7446 17.5L13 17.5L13 22M6 3C7.6569 3 9 4.3431 9 6C9 7.6569 7.6569 9 6 9C4.3431 9 3 7.6569 3 6C3 4.3431 4.3431 3 6 3Z");
}
</style><path class="z24sesp2x"/>`,
		"fallback": "keyline-icons:git-arrow-right-sharp",
	});
}

export default Component;
