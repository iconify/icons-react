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
		"content": `<style>.okvbonb1q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 1V23M6 4V10H14V4H6ZM6 14V20H22V14H6Z");
}
</style><path class="okvbonb1q"/>`,
		"fallback": "keyline-icons:align-start-vertical-sharp",
	});
}

export default Component;
