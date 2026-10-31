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
		"content": `<style>.qsd47gbsd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11L4 21L20 21L20 11M1 11L23 11M3 7L21 7M8 7L8 3L16 3L16 7");
}
</style><path class="qsd47gbsd"/>`,
		"fallback": "keyline-icons:cooking-pot-sharp",
	});
}

export default Component;
